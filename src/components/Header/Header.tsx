import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <Link className={styles.title} to="/">
          FilmHub
        </Link>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Enter a movie title..." />
        </form>
        <Link className={styles.login} to="/login">
          Login
        </Link>
      </header>
    </div>
  );
}

export default Header;
