import { Outlet } from "react-router-dom";
import Background from "../components/Background/Background";
import Header from "../components/Header/Header";

function AppLayout() {
  return (
    <>
      <Background />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
