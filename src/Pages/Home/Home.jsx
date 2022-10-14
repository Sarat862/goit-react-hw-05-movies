import { useState, useEffect } from "react";

import { getTrendingMovies } from '../../API/API';
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [])

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </main>
  
  )
}
