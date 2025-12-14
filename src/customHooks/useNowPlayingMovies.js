// Custom hook will fetch data(moviesArr) from "Watch Mode API" and updates the store.

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  const nowPlayingMovies = useSelector(
    (appStoreState) => appStoreState.movies.nowPlayingMovies
  ); // subscribes to portion of Movie slice from redux store

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
    // *** Conditional Caching technique - will execute only if no data is present.
    if (!nowPlayingMovies) {
      getNowPlayingMovies(); // API call for movies list
    }
  }, []);
};

export default useNowPlayingMovies;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
