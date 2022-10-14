import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "API/API";
import { Loader } from "../Loader/Loader";

export default function Reviews() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getMovieReviews(id);
                setState(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchReviews();
  }, [id]);

  return (
      <ul>
          {loading && <Loader />}
          {error && <p>Something went wrong</p>}
          {state &&  state.total_results ? 
              state.results.map(({ id, author, content }) => 
                  <li key={id}>
                    <b>Author: {author}</b>
                    <p>{content}</p>
                  </li>
              ) : 
              <p>We don't have any reviews for this movie</p>
          }
      </ul>
    )
}
