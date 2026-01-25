import { useEffect, useMemo } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Movie from "./pages/Movie/Movie";
import Actor from "./pages/Actor/Actor";
import User from "./pages/User/User";
import Genre from "./pages/Genre/Genre";
import AppLayout from "./ui/AppLayout";
import supabase from "./services/supabase";
import ProtectedRoute from "./components/routeGuards/ProtectedRoute";
import PublicOnlyRoute from "./components/routeGuards/PublicOnlyRoute";
import { clearSession, setSession } from "./store/authSlice";
import type { AppDispatch } from "./store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    let isMounted = true;

    const bootstrap = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) {
        return;
      }

      if (data.session) {
        dispatch(setSession(data.session));
      } else {
        dispatch(clearSession());
      }
    };

    bootstrap();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        dispatch(setSession(session));
      } else {
        dispatch(clearSession());
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [dispatch]);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          element: <AppLayout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/search",
              element: <Search />,
            },
            {
              path: "/genres/:id",
              element: <Genre />,
            },
            {
              path: "/login",
              element: (
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              ),
            },
            {
              path: "/signup",
              element: (
                <PublicOnlyRoute>
                  <Signup />
                </PublicOnlyRoute>
              ),
            },
            {
              path: "/movies/:id",
              element: <Movie />,
            },
            {
              path: "/actors/:id",
              element: <Actor />,
            },
            {
              path: "/user",
              element: (
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              ),
            },
          ],
        },
      ]),
    [],
  );

  return <RouterProvider router={router} />;
}

export default App;
