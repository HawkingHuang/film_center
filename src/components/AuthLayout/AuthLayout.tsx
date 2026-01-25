import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

type AuthLayoutProps = {
  children: ReactNode;
  onConfirm: () => void;
};

function AuthLayout({ children, onConfirm }: AuthLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div className="container">
      <section className={styles.authLayout}>
        <div className={styles.card}>
          <div className={styles.tabs}>
            <button type="button" className={`${styles.tabButton} ${isLogin ? styles.tabActive : ""}`} onClick={() => navigate("/login")}>
              Login
            </button>
            <button type="button" className={`${styles.tabButton} ${!isLogin ? styles.tabActive : ""}`} onClick={() => navigate("/signup")}>
              Signup
            </button>
          </div>

          <div className={styles.formArea}>{children}</div>

          <div className={styles.actions}>
            <button type="button" className={styles.secondaryButton} onClick={() => navigate("/")}>
              Home
            </button>
            <button type="button" className={styles.primaryButton} onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthLayout;
