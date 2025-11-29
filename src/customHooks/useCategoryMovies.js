// Custom hook will fetch data(moviesArr), filter data with type "movie" and adds to store.

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { WatchModeAPI__URL } from "../utils/constants.js";
import { addMovies } from "../utils/Store/moviesSlice.js"; // redux actions

const useCategoryMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    // console.log(moviesReleasesList);

    // type Movies
    const movies = moviesReleasesList.filter(
      (movieObj) => movieObj.type === "movie"
    );

    // Dispatching an Action to redux store
    dispatch(addMovies(movies));
  };

  useEffect(() => {
    getMovies(); // API call for movies list
  }, []);
};

export default useCategoryMovies;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
