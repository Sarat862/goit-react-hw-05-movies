import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const SharedLayout = lazy(() => import("./SharedLayout/SharedLayout"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Movies = lazy(() => import("../Pages/Movies/Movies"));
const MovieDetails = lazy(() => import("Pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};