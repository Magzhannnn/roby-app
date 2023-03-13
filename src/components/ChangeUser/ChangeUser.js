import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authValid } from "../../helpers/AuthValid";
import FormContainer from "../../UI/FormContainer/FormContainer";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import { ABOUT_ROUTE, HOME_ROUTE } from "../../utils/consts";
import Container from "../Container/Container";
import styles from "./ChangeUser.module.css";

const ChangeUser = () => {
  const [person, setPerson] = useState({});
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPerson(JSON.parse(localStorage.getItem("person")));
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);

  // useEffect(() => {
  //   console.log(person);
  //   console.log(users);
  // }, [person, users]);

  const userIsChange = (person) => {
    const usersChange = users.map((user) =>
      user.id === person.id ? person : user
    );

    localStorage.setItem("users", JSON.stringify(usersChange));
    localStorage.setItem("person", JSON.stringify(person));
    // alert("You haven't changed anything!");
    // return false;

    // alert("Good, we've saved your data.");
    // return true;
  };

  const changeHandler = () => {
    if (authValid(person.email, person.password, person.name, person.age)) {
      userIsChange(person);
      navigate(HOME_ROUTE);
    }
  };

  const userIsDelete = (person) => {
    const usersDelete = users.filter((user) => user.id !== person.id);

    localStorage.setItem("users", JSON.stringify(usersDelete));
    localStorage.removeItem("isLogin");
    localStorage.removeItem("person");
  };

  const deleteHandler = () => {
    userIsDelete(person);
    navigate(ABOUT_ROUTE);
  };

  return (
    <Container className={styles.change}>
      <h1 className={styles.change_title}>Change page</h1>
      <FormContainer>
        <MyInput
          type="text"
          placeholder="Input name"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
        <MyInput
          type="email"
          placeholder="Input email"
          value={person.email}
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
        />
        <MyInput
          type="password"
          placeholder="Input password"
          value={person.password}
          onChange={(e) => setPerson({ ...person, password: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Input age"
          value={person.age}
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
        />
        <div className={styles.change_btn}>
          <MyButton type="button" value="Change" onClick={changeHandler} />
          <MyButton type="button" value="Delete" onClick={deleteHandler} />
        </div>
      </FormContainer>
    </Container>
  );
};

export default ChangeUser;
