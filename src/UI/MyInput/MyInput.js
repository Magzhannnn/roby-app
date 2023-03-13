import styles from "./MyInput.module.css";

const MyInput = (props) => {
  return (
    <div className={styles.block}>
      <input className={styles.my_input} {...props} />
    </div>
  );
};

export default MyInput;
