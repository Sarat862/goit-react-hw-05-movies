import axios from 'axios';

const KEY = "3dd1fe04673ec54a7a07b66c5de36e89";
const URL = "https://api.themoviedb.org/3";

const instance = axios.create({
    baseURL: URL,
    params: {
        api_key: KEY,
    }
});

export const getTrendingMovies = async () => {
    const { data } = await instance.get("/trending/movie/day");
    return data;
}

export const getMovieDetails = async (id) => {
    const { data } = await instance.get(`/movie/${id}`);
    return data;
}

export const getMovieCredits = async (id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);
    return data;
}

export const getMovieReviews = async (id) => {
    const { data } = await instance.get(`/movie/${id}/reviews`);
    return data;
}

export const getSearchMovies = async (query) => {
    const { data } = await instance.get(`/search/movie`, {
        params: {query}
    });
    return data;
}