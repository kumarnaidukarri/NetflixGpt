// Gpt Search Page contains Search bar, Movie suggestions.

import { Netflix_BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <>
      {/* background image */}
      <div className="bg-container  fixed -z-10">
        <img
          alt="netflix background image"
          src={Netflix_BG_URL}
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="gpt-search-container">
        {/* Gpt search bar, Gpt Movie Suggestions */}
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
