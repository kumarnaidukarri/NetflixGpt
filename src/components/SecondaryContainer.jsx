// Secondary container of 'Browse Page'
import { useSelector } from "react-redux";

// my components
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies); // Subscribe to Movie slice of redux store

  return (
    <div className=" bg-black">
      <div className="-mt-30 pl-12 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      </div>

      {/* 
       movie list - Now Playing
       movie list - Trending
       movie list - Popular
       movie list - Horror
       those lists are Horizontal scrollable with movie cards.
      */}
    </div>
  );
};

export default SecondaryContainer;
