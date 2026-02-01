import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { signUpWithPassword } from "../../utils/authUtils";
import styles from "./Signup.module.scss";

function Signup() {
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

    const { error: authError } = await signUpWithPassword({
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
          title: "Successfully Signed Up",
          description: "Welcome to FilmHub",
        },
      },
    });
  };

  return (
    <AuthLayout onConfirm={handleConfirm}>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="signup-email">
          Email
        </label>
        <input id="signup-email" className={styles.input} type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
      </div>
      <div className={styles.formField}>
        <label className={styles.label} htmlFor="signup-password">
          Password
        </label>
        <input
          id="signup-password"
          className={styles.input}
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </AuthLayout>
  );
}

export default Signup;
