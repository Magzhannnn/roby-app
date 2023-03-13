import Container from '../Container/Container';
import styles from "./Footer.module.css"


const Footer = () => {
	return (
    <div className={styles.footer}>
      <Container className={styles["footer-head"]}>
        <div className={styles["footer-1"]}>© Microsoft</div>
        <div className={styles["footer-1"]}>Confidentiality</div>
        <div className={styles["footer-1"]}>Settings</div>
      </Container>
    </div>
  );
}
 
export default Footer;