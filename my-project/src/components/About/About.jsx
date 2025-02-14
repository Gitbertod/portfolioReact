import React from "react";
import styles from "./About.module.css"
import Title from "../title/Title";

const About = () => {
  return (
    <div data-aos="fade-up"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000">
    <Title title={"Acerca de mi"}></Title>
    <div className={styles.about}>
      <p className={styles.parrafo}>
        Soy Gilberto Díaz, desarrollador frontend especializado en React,
        JavaScript y Tailwind CSS. Me apasiona crear interfaces atractivas,
        optimizadas y accesibles, siempre priorizando la experiencia del usuario
        y las buenas prácticas. Me encanta aprender y mejorar constantemente,
        explorando nuevas tecnologías para construir soluciones eficientes y
        escalables. Además, disfruto los videojuegos clásicos y sigo
        perfeccionando mi inglés. Si buscas un desarrollador comprometido y
        detallista, ¡hablemos!
      </p>
      <img src="/profile.svg" className={styles.image}></img>
    </div>
    </div>
  );
};

export default About;
