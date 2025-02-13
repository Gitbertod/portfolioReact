import styles from "./Card.module.css";
const Card = ({ title, image, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image}></img>
      </div>
      <h5 className="py-3 pl-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="p-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default Card;
