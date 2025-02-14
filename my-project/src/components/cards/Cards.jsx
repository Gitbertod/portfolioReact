import Card from "../Card/Card";
import SocialNetworks from "../socialNetworks/SocialNetworks";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import styles from "./Cards.module.css";

const Cards = ({ children, id }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      id={id}
      className={styles.cards}
    >
      {children}
      <div className=" flex justify-center  flex-wrap">
        <Card
          title="SIGMA"
          image={"sigmaCover.jpg"}
          link={"https://sigmasafi.pe/"}
          text={
            <>
              <p>
                Desarrollé un sitio web a medida para Sigma, Implementé un URLs
                dinámicas para mejorar el SEO, garantizando una experiencia de
                usuario fluida y eficiente. El proyecto fue desarrollado con
                React para rutas utilicé React Router y estilos con Tailwind CSS
                y CSS Modules.<br></br>
                <br></br>
              </p>
              <p className={styles.subtitle}>Tecnologías utilizadas: </p>
            </>
          }
          icons={
            <div className={styles.iconContainer}>
              <FaReact className={styles.icon} alt="ícono de react" />{" "}
              <RiTailwindCssFill
                className={styles.icon}
                alt="ícono de TailwindCSS"
              />
              <SiReactrouter
                className={styles.icon}
                alt="ícono de React Router"
              />
            </div>
          }
        />

        <Card
          title="VOYANT"
          image={"voyantCover.jpg"}
          link={"https://voyant-chi.vercel.app/"}
          text={
            <>
              <p>
                Desarrollé una web app para la empresa Voyant, optimizando su
                interfaz con React y Tailwind. La aplicación ofrece una
                experiencia intuitiva y rápida, mejorando la interacción de los
                usuarios con la plataforma.
                <br></br>
                <br></br>
              </p>
              <p className={styles.subtitle}>Tecnologías utilizadas: </p>
            </>
          }
          icons={
            <div className={styles.iconContainer}>
              <FaReact className={styles.icon} alt="ícono de react" />{" "}
              <RiTailwindCssFill
                className={styles.icon}
                alt="ícono de TailwindCSS"
              />
              <SiReactrouter
                className={styles.icon}
                alt="ícono de React Router"
              />
            </div>
          }
        ></Card>
      </div>
    </div>
  );
};

export default Cards;
