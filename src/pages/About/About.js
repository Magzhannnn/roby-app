import Container from "../../components/Container/Container";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container className={styles.about}>
      <div className={styles["about-flag"]}>Microsoft</div>
      <div className={styles["about-blocks"]}>
        <div className={styles["about-block"]}>Item 1</div>
        <div className={styles["about-block"]}>Item 2</div>
        <div className={styles["about-block"]}>Item 3</div>
      </div>
      <div className={styles["about-content"]}>
        <h2 className={styles["about-content_title"]}>Lorem Ipsum</h2>
        <p className={styles["about-content_text"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </Container>
  );
};

export default About;
