import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header.jsx";
import { WatchModeAPI__URL } from "../utils/constants.js";
import { addNowPlayingMovies } from "../utils/Store/moviesSlice.js"; // redux actions

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    console.log(moviesReleasesList);

    // Dispatching an Action to redux store
    dispatch(addNowPlayingMovies(moviesReleasesList));
  };

  useEffect(() => {
    getNowPlayingMovies(); // API call for movies list
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
