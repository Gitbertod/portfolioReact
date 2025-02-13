import { FaGithub } from "react-icons/fa";
import styles from "./SocialNetworks.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const SocialNetworks = () => {
  return (
    <div className={styles.networks}>
      <FaGithub className={styles.icon} />
      <FaLinkedin className={styles.icon} />
      <FaWhatsapp className={styles.icon} />
      <CiMail className={styles.icon} />
    </div>
  );
};

export default SocialNetworks;
