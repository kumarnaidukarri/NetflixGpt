// video background of Main Container of Browse Page

import { useEffect } from "react";
import {
  KINOCHECKAPI__MoviesURL,
  KINOCHECKAPI__HeaderOptions,
} from "../utils/constants.js"; // video api url

const VideoBackground = (props) => {
  const { tmdbId } = props;

  // fetch the 'trailer video' by using tmdb_id of movie
  const getMovieVideos = async () => {
    const responseObj = await fetch(
      KINOCHECKAPI__MoviesURL + "299534",
      KINOCHECKAPI__HeaderOptions
    ); // "299534"
    const jsonData = await responseObj.json();
    console.log(jsonData);
  };

  useEffect(() => {
    getMovieVideos();
  }, []); // runs only on initial first render

  return <div>VideoBackground</div>;
};

export default VideoBackground;
