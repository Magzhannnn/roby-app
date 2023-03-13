import styles from "./allCard.module.css";

const CardItem = ({ item }) => {
  return <div className={styles.card_item}>Блок {item}.</div>;
};

export default CardItem;
