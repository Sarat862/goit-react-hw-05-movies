import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import imageNotFound from "../../image/image-not-found.png";
import css from "./Cast.module.css";
import { getMovieCredits } from "API/API";
import { Loader } from "../Loader/Loader";

export default function Cast() {

    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getMovieCredits(id);
                setState(data.cast);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCast();
    }, [id]);

    return (
        <ul>
            {loading && <Loader />}
            {error && <p>Something went wrong</p>}
            {state && state.length > 0 ?
                state.map(({ cast_id, profile_path, original_name, character }) => 
                    <li key={cast_id}>
                        <img className={css.image} src={profile_path ? `https://image.tmdb.org/t/p/w300/${profile_path}` : imageNotFound} alt={original_name} />
                        <p>{original_name}</p>
                        <p>Character: {character}</p>
                    </li>
                    ) :
                    <p>We don't have any information about cast for this movie</p>
            }
        </ul>
    )
}
