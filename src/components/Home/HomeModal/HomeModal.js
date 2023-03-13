import styles from "./HomeModal.module.css";

const HomeModal = (props) => {
  console.log(props);
  return (
    props.hidden && (
      <>
        <div className={styles["modal-overflow"]} onClick={props.onClose}></div>
        <div className={styles["modal-show"]}>
          <div className={styles["show-info"]}>
            <div className={styles[`developer_${props.img}`]}></div>
            <div className={styles["right"]}>
              <div className={styles["show-developer_job"]}>
                Jobs: {props.profession}
              </div>
              <div className={styles["show-developer_name"]}>
                Name: {props.name}
              </div>
              <div className={styles["show-developer_age"]}>
                Age: {props.age}
              </div>
              <div className={styles["show-developer_from"]}>
                From: {props.from}
              </div>
            </div>
          </div>
          <div className={styles["modal-description"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className={styles["modal-close"]} onClick={props.onClose}>
            Exit
          </div>
        </div>
      </>
    )
  );
};

export default HomeModal;
