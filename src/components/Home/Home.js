import Container from "../Container/Container";
import styles from "./Home.module.css";
import HomeBody from "./HomeBody/HomeBody";
import HomeFooter from "./HomeFooter/HomeFooter";

const developers = [
  {
    img: "img1",
    profession: "FrontEnd",
    age: 22,
    from: "Kazakhstan",
    name: "Magzhan",
  },
  {
    img: "img2",
    profession: "Web QA",
    age: 18,
    from: "China",
    name: "Erkezhan",
  },
  {
    img: "img3",
    profession: "Team Leader",
    age: 28,
    from: "Russia",
    name: "Bakyt",
  },
  {
    img: "img4",
    profession: "Mobile QA",
    age: 35,
    from: "Armenia",
    name: "Aidana",
  },
  {
    img: "img5",
    profession: "Software Engineer Manager",
    age: 23,
    from: "France",
    name: "Igor",
  },
];

const Home = () => {
  return (
    <Container className={styles.home}>
      <div className={styles["home-head"]}>
        <div className={styles["home-head_text"]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className={styles["home-head_img"]}></div>
      </div>
      <div className={styles["home-body"]}>
        {developers.map((developer) => (
          <HomeBody
            img={developer.img}
            key={developer.img}
            profession={developer.profession}
            developer={developer}
          />
        ))}
      </div>
      <hr className={styles["home-line"]} />
      <div className={styles["home-footer"]}>
        <HomeFooter />
      </div>
    </Container>
  );
};

export default Home;
