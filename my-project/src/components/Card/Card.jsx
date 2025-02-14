import styles from "./Card.module.css";
const Card = ({ title, image, text,link,children,icons }) => {
  return (
    <a href={link} target="_blank" className={styles.card} >
      <div >
        <div className={styles.imageContainer}>
          <img src={image}></img>
        </div>
        <h5 className="py-3 pl-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="p-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        {icons}
        {children}        
      </div>
    </a>
  );
};

export default Card;
