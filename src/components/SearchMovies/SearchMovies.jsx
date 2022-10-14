import { useState } from "react";
import css from "./SearchMovies.module.css";

export function SearchMovies({onSubmit}) {

  const [movieName, setMovieName] = useState('');

    const handleChange = evt => {
        setMovieName(evt.target.value.toLowerCase());
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        if (movieName.trim() === '') {
            return;
        }
        onSubmit(movieName);
        setMovieName('');
    }

    return (
        
        <form className={css.form} onSubmit={handleSubmit}>
            <input className={css.input}
                type="text"
                value={movieName}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={handleChange}
            />
            <button type="submit" className={css.btn}>Search</button>
        </form>
       
    )
}
