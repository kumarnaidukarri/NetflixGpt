import { useEffect } from "react";

import Header from "./Header.jsx";
import { WatchModeAPI__URL } from "../utils/constants.js";

const Browse = () => {
  // Async method
  const getNowPlayingMovies = async () => {
    const responseObj = await fetch(WatchModeAPI__URL);
    const jsonData = await responseObj.json();
    // console.log(jsonData);

    const moviesReleasesList = jsonData?.releases; // [m1{},m2{},m3{},m4{},...]
    console.log(moviesReleasesList);
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
