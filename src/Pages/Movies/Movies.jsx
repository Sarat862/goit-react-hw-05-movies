import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { getSearchMovies } from "../../API/API";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";

export default function Movies() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getSearchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchSearchMovies();
    }
  }, [query])

  const onSearch = (search) => {
      setSearchParams({query: search});
  }

  return (
    <main>
      <SearchMovies onSubmit={onSearch} />
      {loading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MovieList movies={movies}/>}
    </main>
  )
}
