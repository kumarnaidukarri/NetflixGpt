// Gpt movie suggestions component

import { useSelector } from "react-redux";

// my components
import MovieList from "./MovieList.jsx";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt); // Subscribing to the GPT slice of store
  const { gptMoviesNames, gptMoviesResults } = gpt; // [mv1,mv2,...]  [[],[],[],...]

  if (!gptMoviesNames) return null; // shimmer ui or null

  return (
    <div className="p-4 m-4 text-white bg-black opacity-70">
      <div>
        {
          // loop on each movie
          gptMoviesNames.map((movieName, index) => {
            return (
              <MovieList
                title={movieName}
                movies={gptMoviesResults[index]}
                key={movieName}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
