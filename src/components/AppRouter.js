import { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About/About";
import Auth from "../pages/Auth/Auth";
import {
  ABOUT_ROUTE,
  CHANGE_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import ChangeUser from "./ChangeUser/ChangeUser";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

const AppRouter = () => {
  const [correctIsLogin, setCorrectIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );
  const location = useLocation();

  useEffect(() => {
    setCorrectIsLogin(JSON.parse(localStorage.getItem("isLogin")));
  }, [location.pathname]);

  return (
    <Routes>
      {correctIsLogin === null ? (
        <>
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={LOGIN_ROUTE} element={<Auth />} />
          <Route path={REGISTRATION_ROUTE} element={<Auth />} />
          <Route path="/*" element={<Navigate to={ABOUT_ROUTE} />} />
        </>
      ) : (
        <>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={CHANGE_ROUTE} element={<ChangeUser />} />
          <Route path="/*" element={<Navigate to={HOME_ROUTE} />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
