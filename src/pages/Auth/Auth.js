import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";
import {
  authValid,
  isThereSuch,
  loginIsValidFunc,
} from "../../helpers/AuthValid";
import { userRegister } from "../../store/userAuth.js/user-actions";
import { selectAllUsers } from "../../store/userAuth.js/user-selectors";
import FormContainer from "../../UI/FormContainer/FormContainer";
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from "../../UI/MyInput/MyInput";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/consts";
import styles from "./Auth.module.css";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const allUser = useSelector(selectAllUsers);

  useEffect(() => {
    console.log(allUser);
  }, [allUser]);

  const loginHelper = () => {
    localStorage.setItem("isLogin", "1");
    navigate(HOME_ROUTE);
  };

  const login = () => {
    if (!isLogin) {
      //регистрация
      if (authValid(email, password, name, age) && !isThereSuch(email)) {
        const id = Date.now();
        dispatch(userRegister({ name, email, password, age, id }));
        localStorage.setItem(
          "person",
          JSON.stringify({ name, email, password, age, id })
        );
        setName("");
        setEmail("");
        setPassword("");
        setAge("");
        loginHelper();
      }
    } else {
      // логин
      if (authValid(email, password)) {
        const { loginIsValid, user } = loginIsValidFunc({ email, password });

        if (loginIsValid) {
          loginHelper();
          localStorage.setItem("person", JSON.stringify(user));
          setEmail("");
          setPassword("");
        } else {
          alert("Wrong email or password!!!");
        }
      }
    }
  };

  return (
    <Container className={styles.auth}>
      <h1 className={styles["auth-title"]}>
        Welcome to {isLogin ? "Login" : "Register"} page
      </h1>
      <FormContainer>
        {!isLogin && (
          <MyInput
            type="text"
            placeholder="Input name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <MyInput
          type="email"
          placeholder="Input email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          type="password"
          placeholder="Input password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <MyInput
            type="text"
            placeholder="Input age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        )}
        <div className={styles["form-btn"]}>
          {isLogin ? (
            <h3 className={styles["form-btn"]}>
              Don't have an account?{" "}
              <NavLink
                to={REGISTRATION_ROUTE}
                className={styles["btn-navlink"]}
              >
                Register
              </NavLink>
            </h3>
          ) : (
            <h3 className={styles["form-btn"]}>
              Have an account?{" "}
              <NavLink to={LOGIN_ROUTE} className={styles["btn-navlink"]}>
                Sign in
              </NavLink>
            </h3>
          )}
          <MyButton
            type="button"
            value="button"
            onClick={login}
          />
        </div>
      </FormContainer>
    </Container>
  );
};

export default Auth;
