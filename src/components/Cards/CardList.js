import CardItem from "./CardItem";
import styles from "./allCard.module.css";

const CardList = () => {
  const cards = [1, 2, 3, 4];
  return (
    <div className={styles.card_list}>
      {cards.map((card) => (
        <CardItem item={card} />
      ))}
    </div>
  );
};

export default CardList;
