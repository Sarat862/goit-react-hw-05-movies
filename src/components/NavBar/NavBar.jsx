import { NavLink } from "react-router-dom";
import css from './NavBar.module.css';

const getClassName = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

export function NavBar() {
  return (
    <header>
      <ul className={css.list}>
        <li><NavLink className={getClassName} to="/" end>Home</NavLink></li>
        <li><NavLink className={getClassName} to="/movies">Movies</NavLink> </li>   
      </ul>
    </header>
  )
}
