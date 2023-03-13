import styles from "./HomeFooter.module.css";

const HomeFooter = () => {
  return (
    <div className={styles["home-footer"]}>
      <div className={styles["home-footer_content"]}>
        <div className={styles["content-white"]}></div>
        <div className={styles["content-white_text"]}>LET’S</div>
        <div className={styles["content-yellow"]}></div> EXPLORE
        <div className={styles["content-yellow_text"]}>UNIQUE</div>
        GROUP.
      </div>
      <div className={styles["home-footer_img"]}></div>
    </div>
  );
};

export default HomeFooter;
