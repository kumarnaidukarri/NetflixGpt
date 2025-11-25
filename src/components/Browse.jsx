import Header from "./Header.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js"; // custom hook

const Browse = () => {
  useNowPlayingMovies(); // custom hook will fetch the 'moviesList' data from API and Updates the redux store

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
