import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { EnterIcon } from "@radix-ui/react-icons";
import logo from "../../assets/images/filmhub_logo.png";

function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <Link className={styles.title} to="/">
          <img src={logo} alt="FilmHub Logo" className={styles.logo} />
        </Link>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Enter a movie title..." />
        </form>
        <Link className={styles.login} to="/login">
          <EnterIcon />
          Login
        </Link>
      </header>
    </div>
  );
}

export default Header;
