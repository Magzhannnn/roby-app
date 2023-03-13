import { useState } from 'react';
import HomeModal from "../HomeModal/HomeModal";
import styles from "./HomeBody.module.css";

const HomeBody = (props) => {
  const [hidden, setHidden] = useState(false);

  const closeHandler = () => {
    setHidden(false);
  };
  return (
    <div className={styles["home-body_developer"]}>
      <HomeModal hidden={hidden} onClose={closeHandler} {...props.developer} />
      <div
        className={styles[`developer_${props.img}`]}
        onClick={() => setHidden(true)}
      ></div>
      <div className={styles["developer_text"]}>{props.profession}</div>
    </div>
  );
};

export default HomeBody;
