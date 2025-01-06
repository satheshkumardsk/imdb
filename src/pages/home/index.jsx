import MovieCard from "../../components/movie-card";
import Grid from "@mui/material/Grid2";

import "./style.css";
import { Button } from "@mui/material";
import  UseMovies from "../../hooks/use-movies";

const HomePage = () => {

  const [movies, nextPage] = UseMovies();
  return (
    <div className="homepage-container">
      <section className="movies-container">
        <Grid container spacing={2}>
          {movies.map((movie, index) => (
            <Grid item key={`${movie.id}-${index}`}>
              <MovieCard
                title={movie.title}
                overview={movie.overview}
                poster_path={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" onClick={nextPage}>Load more</Button>
      </section>
    </div>
  );

};

export default HomePage;
