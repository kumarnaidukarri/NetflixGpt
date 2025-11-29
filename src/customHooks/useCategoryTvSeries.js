// Custom hook will fetch data(moviesArr), filter data with type "tv_series" and adds to store.

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { WatchModeAPI__URL } from "../utils/constants.js";
import { addTvSeries } from "../utils/Store/moviesSlice.js"; // redux actions

const useCategoryTvSeries = () => {
  const dispatch = useDispatch();

  const getTvSeries = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    // console.log(moviesReleasesList);

    // type Tv Series
    const tvSeries = moviesReleasesList.filter(
      (movieObj) => movieObj.type === "tv_series"
    );

    // Dispatching an Action to redux store
    dispatch(addTvSeries(tvSeries));
  };

  useEffect(() => {
    getTvSeries(); // API call for movies list
  }, []);
};

export default useCategoryTvSeries;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
