import React from "react";
import styles from "./About.module.css"
import Title from "../title/Title";

const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
