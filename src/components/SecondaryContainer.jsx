// Secondary container of 'Browse Page'
import { useSelector } from "react-redux";

// my components
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
  const moviesReduxState = useSelector((appStore) => appStore.movies); // Subscribe to Movie slice of redux store

  return (
    <div className=" bg-black">
      <div className="-mt-30 pl-12 relative z-10">
        <MovieList
          title={"Now Playing"}
          movies={moviesReduxState.nowPlayingMovies}
        />
        <MovieList title={"Movies"} movies={moviesReduxState.movies} />
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

// ["Now Playing", "Trending", "Popular", "Horror", "Upcoming"]
// Movie categories types -
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
