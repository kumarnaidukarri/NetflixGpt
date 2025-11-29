// Custom hook will fetch data(moviesArr), filter data with type "short_film" and adds to store.

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { WatchModeAPI__URL } from "../utils/constants.js";
import { addShortFilms } from "../utils/Store/moviesSlice.js"; // redux actions

const useCategoryShortFilms = () => {
  const dispatch = useDispatch();

  const getShortFilms = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    // console.log(moviesReleasesList);

    // type Short Films
    const shortFilms = moviesReleasesList.filter(
      (movieObj) => movieObj.type === "short_film"
    );

    // Dispatching an Action to redux store
    dispatch(addShortFilms(shortFilms));
  };

  useEffect(() => {
    getShortFilms(); // API call for movies list
  }, []);
};

export default useCategoryShortFilms;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
