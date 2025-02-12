import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <a href="#" className="rtl:space-x-reverse">
      <span className={styles.doto}>GILBERTO DÍAZ</span>
      <p className={styles.tagline}>WEB DEVELOPER</p>
    </a>
  );
}
