import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Toast from "@radix-ui/react-toast";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import supabase from "../../services/supabase";
import styles from "./Signup.module.scss";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);

  const handleConfirm = async () => {
    setError(null);
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    const { error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    setToastOpen(true);
    window.setTimeout(() => navigate("/signup"), 800);
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

      <Toast.Root className="toastRoot" open={toastOpen} onOpenChange={setToastOpen}>
        <Toast.Title className="toastTitle">Successfully Signed Up</Toast.Title>
        <Toast.Description className="toastDescription">Welcome to FilmHub.</Toast.Description>
      </Toast.Root>
    </AuthLayout>
  );
}

export default Signup;
