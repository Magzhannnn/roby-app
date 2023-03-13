import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ABOUT_ROUTE,
  CHANGE_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
} from "../../utils/consts";
import Container from "../Container/Container";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [correctIsLogin, setCorrectIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );
  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("person"))
  );
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("person");
    navigate(ABOUT_ROUTE);
  };

  useEffect(() => {
    setCorrectIsLogin(JSON.parse(localStorage.getItem("isLogin")));
    setPerson(JSON.parse(localStorage.getItem("person")));
  }, [navigate]);

  if (correctIsLogin === null) {
    return (
      <div className={styles.navbar}>
        <Container className={styles["navbar-head"]}>
          <div className={styles["navbar-icon"]}></div>
          <div className={styles["navbar-items_auth"]}>
            <Link to={ABOUT_ROUTE} className={styles["navbar-item"]}>
              About
            </Link>
            <Link to={LOGIN_ROUTE} className={styles["navbar-item"]}>
              Authorization
            </Link>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={styles.navbar}>
        <Container className={styles["navbar-head"]}>
          <div className={styles["navbar-icon"]}></div>
          <div className={styles["navbar-items"]}>
            <Link to={CHANGE_ROUTE} className={styles["navbar-item"]}>
              Change
            </Link>
            <Link to={HOME_ROUTE} className={styles["navbar-item"]}>
              Home
            </Link>
            <Link to={CONTACT_ROUTE} className={styles["navbar-item"]}>
              Contact
            </Link>
            <div className={styles["navbar-item"]} onClick={logout}>
              Exit
            </div>
          </div>
        </Container>
      </div>
    );
  }
};

export default Navbar;
