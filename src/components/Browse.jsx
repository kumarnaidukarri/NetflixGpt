import Header from "./Header.jsx";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js"; // custom hook

const Browse = () => {
  useNowPlayingMovies(); // custom hook will fetch the 'moviesList' data from API and Updates the redux store

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
