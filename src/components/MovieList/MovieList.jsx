import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export function MovieList({ movies }) {

  const location = useLocation();
  
  return (
    <ul>
        {movies.map(({ id, title }) => <li key={id}>
           <Link to={`/movies/${id}`} state={{from: location}} className={css.link_movie}>{title}</Link>
         </li>) }     
    </ul>
  )
}
