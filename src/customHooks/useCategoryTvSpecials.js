// Custom hook will fetch data(moviesArr), filter data with type "tv_special" and adds to store.

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { WatchModeAPI__URL } from "../utils/constants.js";
import { addTvSpecials } from "../utils/Store/moviesSlice.js"; // redux actions

const useCategoryTvSpecials = () => {
  const dispatch = useDispatch();

  const getTvSpecials = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    // console.log(moviesReleasesList);

    // type Tv Series
    const tvSpecials = moviesReleasesList.filter(
      (movieObj) => movieObj.type === "tv_special"
    );

    // Dispatching an Action to redux store
    dispatch(addTvSpecials(tvSpecials));
  };

  useEffect(() => {
    getTvSpecials(); // API call for movies list
  }, []);
};

export default useCategoryTvSpecials;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
