import { FaGithub } from "react-icons/fa";
import styles from "./SocialNetworks.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const SocialNetworks = () => {
  return (
    <div className={styles.networks}>
      <a href="https://github.com/Gitbertod" target="_blank">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/gilberto-d%C3%ADaz-pimentel-018a34165/" target="_blank">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href=" https://wa.me/+51999917531" target="_blank">
        <FaWhatsapp className={styles.icon} />
      </a>
      <a href="mailto:diazp.gilberto@gmail.com" target="_blank">
        <CiMail className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialNetworks;
