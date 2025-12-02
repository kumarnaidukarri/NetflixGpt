// Custom hook will fetch data(moviesArr) from "Watch Mode API" and updates the store.

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { WatchModeAPI__URL } from "../utils/constants.js";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addMovies,
  addTvSeries,
  addTvSpecials,
  addShortFilms,
} from "../utils/Store/moviesSlice.js"; // redux actions

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    // console.log(moviesReleasesList);

    // Dispatching  Actions to redux store
    dispatch(addNowPlayingMovies(moviesReleasesList));

    dispatch(addPopularMovies(moviesReleasesList));

    dispatch(
      addMovies(
        moviesReleasesList.filter((movieObj) => movieObj.type === "movie")
      )
    );

    dispatch(
      addTvSeries(
        moviesReleasesList.filter((movieObj) => movieObj.type === "tv_series")
      )
    );

    dispatch(
      addTvSpecials(
        moviesReleasesList.filter((movieObj) => movieObj.type === "tv_special")
      )
    );

    dispatch(
      addShortFilms(
        moviesReleasesList.filter((movieObj) => movieObj.type === "short_film")
      )
    );
  };

  useEffect(() => {
    getNowPlayingMovies(); // API call for movies list
  }, []);
};

export default useNowPlayingMovies;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
