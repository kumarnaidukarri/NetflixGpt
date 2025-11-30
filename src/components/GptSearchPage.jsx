// Gpt Search Page contains Search bar, Movie suggestions.

import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <div className="gpt-search-page">
      {/* background image */}
      <div className="bg-container absolute -z-10">
        <img
          alt="netflix background image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_small.jpg"
          className="h-screen w-screen"
        />
      </div>

      {/* Gpt search bar, Gpt Movie Suggestions */}
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
