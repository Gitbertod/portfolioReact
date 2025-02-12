import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ContainerComponent.module.css";
const ContainerComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.container}>
      <div
        className={styles.box}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <h4 className={styles.saludo}>Hola soy </h4>
        <h1 className={styles.myname}>Gilberto Díaz</h1>
        <div>
          <p>
            Desarrollador front-end, creo aplicaciones web intuitivas,
            funcionales y atractivas
          </p>
        </div>
      </div>
      <div
        className={styles.box}
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        
      </div>
    </section>
  );
};

export default ContainerComponent;
