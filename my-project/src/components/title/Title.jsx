import styles from "./Title.module.css";

export default function Title({title}) {
  return (
    <div className="flex justify-center m-3">
      <h2 className={styles.doto}>{title}</h2>
    </div>
  );
}
