import Container from "../Container/Container";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Container className={styles.contact}>
      <div className={styles["contact-head"]}>
        <div className={styles["contact-head_title"]}>CONTACT ME</div>
        <div className={styles["contact-head_text"]}>
          I would like always to stay in touch with you
        </div>
      </div>
      <div className={styles["contact-body"]}>
        <div className={styles["contact-body_phone"]}>
          <div className={styles["phone-img"]}></div>
          <div className={styles["phone-text"]}>
            +1 800 559 6580 <br /> +1 800 603 6035
          </div>
        </div>
        <div className={styles["contact-body_map"]}>
          <a
            href="https://www.google.com/maps/place/25%C2%B015'07.9%22N+55%C2%B016'48.0%22E/@25.2522,55.28,15z/data=!4m5!3m4!1s0x0:0xf32def4a815dcf53!8m2!3d25.2522!4d55.28?hl=ru-RU"
            target="_blank"
          >
            <div className={styles["map-img"]}></div>
          </a>
          <div className={styles["map-text"]}>
            9870 ST VINCENT PLACE, <br />
            GLASGOW, DC 45 FR 45.
          </div>
        </div>
        <div className={styles["contact-body_email"]}>
          <div className={styles["email-img"]}></div>
          <a href="mailto:mail@demolink.org" className={styles["email-text"]}>
            MAIL@DEMOLINK.ORG
          </a>
        </div>
      </div>
      <div className={styles["contact-foot"]}>
        Please send me yor personal questions and wishes. ALso, you can order a
        fotoshoot by sending me an email, and discuss the details. Thank you fo
        choosing me!
      </div>
    </Container>
  );
};

export default Contact;
