import styles from "./FormContainer.module.css";

const FormContainer = (props) => {
  return <form className={styles["auth-form"]}>{props.children}</form>;
};

export default FormContainer;
