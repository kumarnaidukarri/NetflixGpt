import Header from "./Header.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

// Custom Hooks
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js";
import useCategoryMovies from "../customHooks/useCategoryMovies.js";

const Browse = () => {
  useNowPlayingMovies(); // custom hook will fetch the 'moviesList' data from API and Updates the redux store
  useCategoryMovies(); // custom hook will fetch the 'moviesList' data  from API, filters based on type 'movie', Updates the redux store

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

/* 
Browse Page

  Main Container
    - video background
    - video title
  Secondary Container
    - Movie List * n
         - (movie cards * n)  
*/
