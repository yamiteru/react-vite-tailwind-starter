import styles from "./footer.module.css";
import component from "@/utils/react/component";

const Footer = component(() => {
  return <footer className={styles.footer}>This is a footer</footer>;
});

export default Footer;
