import styles from "./MyButton.module.css";

const MyButton = (props) => {
  return <input className={styles.butt} {...props} />;
};

export default MyButton;
