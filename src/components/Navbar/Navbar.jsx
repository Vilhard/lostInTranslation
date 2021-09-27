import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const username = localStorage.getItem("username");
  const history = useHistory();

  function logoutUser() {
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    history.push("/");
  }
  function goToProfilePage() {
    history.push("/profile");
  }

  const userProfile = () => {
    return (
      <div className={styles.NavbarUser}>
        <div onClick={goToProfilePage}>
          <span className={styles.NavbarUserName}>{username}</span>
        </div>
        <button className={styles.NavbarButton} onClick={logoutUser}>
          <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
        </button>
      </div>
    );
  };
  return (
    <>
      <nav className={styles.Navbar}>
        <ul className={styles.NavbarMenu}>
          <li className={styles.NavbarHeadingText}>
            <a className={styles.NavbarUserLogin} href="/">
              Lost in Translation
            </a>
          </li>
          {username !== null && <li>{userProfile()}</li>}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
