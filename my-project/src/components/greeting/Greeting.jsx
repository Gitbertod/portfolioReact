import styles from "./Greeting.module.css";

export default function Greeting() {
  return (
    <div
      className={styles.box}
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div>
        <h4 className={styles.saludo}>Hola soy </h4>
        <h1 className={styles.myname}>Gilberto Díaz</h1>
      </div>
      <div>
        <p className={styles.description}>
          Desarrollador front-end, creo aplicaciones web intuitivas, funcionales
          y atractivas
        </p>
      </div>
    </div>
  );
}
