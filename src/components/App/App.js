import AppRouter from "../AppRouter";
import Footer from '../Footer/Footer';
import Navbar from "../Navbar/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
