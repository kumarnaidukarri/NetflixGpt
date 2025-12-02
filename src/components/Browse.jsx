import { useSelector } from "react-redux";

import Header from "./Header.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import GptSearchPage from "./GptSearchPage.jsx";

// Custom Hooks
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies.js";

const Browse = () => {
  const showGptSearch = useSelector((appStore) => appStore.gpt.showGptSearch); // Subscribes to Gpt slice of redux store

  useNowPlayingMovies(); // custom hook will fetch the 'moviesList' data from API and Updates the redux store

  return (
    <div>
      <Header />
      {/* show/hide GPT component based on the 'gpt state' in redux store. */}
      {showGptSearch === true ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
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
