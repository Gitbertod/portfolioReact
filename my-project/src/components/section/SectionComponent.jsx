import SocialNetworks from "../socialNetworks/SocialNetworks";
import styles from "./SectionComponent.module.css";

export default function SectionComponent({ children }) {
  return (
    <div
      className={styles.section}
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      {children}
      <div>
        <SocialNetworks></SocialNetworks>
      </div>
    </div>
  );
}
