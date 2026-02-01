import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { signInWithPassword } from "../../utils/authUtils";
import styles from "./Login.module.scss";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const handleConfirm = async () => {
    setError(null);
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    const { error: authError } = await signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    navigate("/", {
      replace: true,
      state: {
        toast: {
          title: "Successfully Logged In",
          description: "Welcome back",
        },
      },
    });
  };

  return (
    <AuthLayout onConfirm={handleConfirm}>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="login-email">
          Email
        </label>
        <input id="login-email" className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
      </div>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="login-password">
          Password
        </label>
        <input
          id="login-password"
          className={styles.input}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </AuthLayout>
  );
}

export default Login;
