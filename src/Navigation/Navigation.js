import { NavLink } from "react-router-dom";
import s from "../Navigation/navigation.module.css";

const Navigation = () => (
  <header className={s.header}>
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Navigation;
