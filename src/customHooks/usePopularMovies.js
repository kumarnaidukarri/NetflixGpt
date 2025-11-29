// Custom hook will fetch data(moviesArr) from "Watch Mode API", filter data with type "movie" and updates the store.

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { WatchModeAPI__URL } from "../utils/constants.js";
import { addPopularMovies } from "../utils/Store/moviesSlice.js"; // redux actions

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    // console.log(moviesReleasesList);

    // Popular movies
    const popularMovies = moviesReleasesList.filter(
      (movieObj) => movieObj.type === "movie"
    );

    // Dispatching an Action to redux store
    dispatch(addPopularMovies(popularMovies));
  };

  useEffect(() => {
    getPopularMovies(); // API call for movies list
  }, []);
};

export default usePopularMovies;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
