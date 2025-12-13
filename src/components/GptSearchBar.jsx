// Gpt search bar component

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import lang from "../utils/languageConstants.js";
import { WatchModeAPISearchByName__URL } from "../utils/constants.js";
import { addGptMoviesResults } from "../utils/Store/GptSlice.js";
import openai from "../utils/OpenAi.js";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.language.lang); // Subscribes to language slice of redux store.
  const searchTextRef = useRef(null); // ref for getting reference to Search Inputbox dom element
  const dispatch = useDispatch();

  // search movie in WatchMode API
  const searchMovieByName = async (movie) => {
    const responseData = await fetch(WatchModeAPISearchByName__URL + movie);
    const jsonData = await responseData.json();

    const resultsArr = jsonData?.title_results;
    return resultsArr;
  };

  const handleGptSearchClick = async () => {
    console.log(searchTextRef.current.value);

    if (searchTextRef.current.value === "") {
      return null;
    }

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchTextRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Don, Spider-man, Life Of Pi, Interstellar, Transformers";

    /* !!! currently, API calls won't work. I don't have OpenAI credits. Need to Pay billing to use APIs. !!! */
    // Make an Api call to GPT API and get Movie Results.
    /*
    const gptResults = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResults?.choices?.[0]?.messages?.content); // "Dunkirk, Spiderman, Life of Pie, Interstellar, Transformers"

    const gptMoviesArr = gptResults?.choices?.[0]?.messages?.content.split(","); // [Dunkirk, Spiderman, Life of Pie, Interstellar, Transformers]
    console.log(gptMoviesArr);
    */

    const exampleGptMoviesNamesArray = [
      searchTextRef.current.value,
      "Dunkirk",
      "Spider-man",
      "Life of Pi",
      "Interstellar",
      "Transformers",
    ];
    const moviesPromisesArray = exampleGptMoviesNamesArray.map(
      (movie) => searchMovieByName(movie) // method for API call
    );
    const moviesArray = await Promise.all(moviesPromisesArray);

    dispatch(
      addGptMoviesResults({
        moviesNames: exampleGptMoviesNamesArray,
        moviesResults: moviesArray,
      })
    ); // dispatch an action
  };

  return (
    <div className="Gpt-Searchbar  pt-[7.5%]  flex justify-center">
      <form
        className="w-1/2 bg-black  grid grid-cols-12"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          ref={searchTextRef}
          type="text"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          className="m-4 p-4 bg-white rounded-sm  col-span-9"
        />
        <button
          className="px-4 py-2 m-4 text-white bg-red-700 rounded-lg cursor-pointer hover:bg-red-600  col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
