import { Outlet, Link } from "react-router-dom";
import imageNotFound from "../../image/image-not-found.png";
import css from "./MovieDetailsMarkup.module.css";

export function MovieDetailsMarkup({state, from}) {
  return (
    <div>
        <div className={css.movieWrapper}>
            <img src={state.poster_path ? `https://image.tmdb.org/t/p/w300/${state.poster_path}` : imageNotFound} alt={state.title} width="300"/>
            <div className={css.movieWrapper__info}>
                <h1>{`${state.title} (${state.release_date.slice(0, 4)})`}</h1>
                <p>{`User Score: ${Math.round(state.vote_average * 100 / 10)}%`}</p>
                <h2>Overview</h2>
                <p>{state.overview}</p>
                <h2>Genres</h2>
                <p>{state.genres.map(({name}) => name).join(' ') }</p>
            </div>
        </div>
        <p>Additional information</p>
        <ul className={css.listAdd__info}>
            <li><Link to={"cast"} state={{from}} className={css.linkAdd__info} >Cast</Link></li>
            <li><Link to={"reviews"} state={{from}} className={css.linkAdd__info} >Reviews</Link></li>
        </ul>
        <Outlet/>          
    </div>
  )
}
