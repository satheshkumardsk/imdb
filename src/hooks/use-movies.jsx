import { useEffect, useState } from "react";
import { movieAPIInstance } from "../api";

const UseMovies = () => {
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        movieAPIInstance.get(`/movie/popular?page=${pageNumber}`).then((response) => {
            const newlyLoadedMovies = response.data.results;
            setMovies((movies) => [...movies, ...newlyLoadedMovies]);
        });
    }, [pageNumber]);

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    };

    return [movies, nextPage];
};

export default UseMovies;