import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { TbArrowBigLeft  } from 'react-icons/tb';

import css from "./MovieDetails.module.css";
import { getMovieDetails } from "API/API";
import { Loader } from "components/Loader/Loader";
import { MovieDetailsMarkup } from "components/MovieDetailsMarkup/MovieDetailsMarkup";

export default function MovieDetails() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const location = useLocation();
    const from = location.state?.from ?? "/movies";

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getMovieDetails(id);
                setState(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [id]);

    return (
        <div>
            <Link to={from} className={css.link_arrow}> <TbArrowBigLeft /> Go back</Link>
            {loading && <Loader />}
            {error && <p>Something went wrong</p>}
            {state && (<MovieDetailsMarkup state={state} from={from} />)}
        </div>
    )
}
