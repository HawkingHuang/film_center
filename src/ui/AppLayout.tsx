import { Outlet, useLocation } from "react-router-dom";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";

function AppLayout() {
  const location = useLocation();

  return (
    <>
      <Background />
      <div style={{ position: "relative", zIndex: 2 }}>
        {location.pathname !== "/login" && location.pathname !== "/signup" && <Header />}
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
