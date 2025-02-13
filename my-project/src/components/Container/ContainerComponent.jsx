import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ContainerComponent.module.css";
const ContainerComponent = ({children}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.container}>
      {children}
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
