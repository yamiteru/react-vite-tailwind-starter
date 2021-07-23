import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import component from "@/utils/react/component";

type Props = {
  links: [title: string, link: string, exact?: boolean][];
};

const Navigation = component<Props>(({ links }) => {
  return (
    <nav className={styles.navigation}>
      {links.map(([title, link, exact = false], i) => (
        <NavLink
          to={link}
          exact={exact}
          className={styles.link}
          activeClassName={styles.active}
          key={link + i}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
});

export default Navigation;
