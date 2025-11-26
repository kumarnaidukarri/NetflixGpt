// video background of Main Container of Browse Page

import { useEffect, useState } from "react";
import {
  KINOCHECKAPI__MoviesURL,
  KINOCHECKAPI__HeaderOptions,
} from "../utils/constants.js"; // video api url

const VideoBackground = (props) => {
  const { tmdbId } = props;

  const [watchId, setWatchId] = useState(null); // state variable to store 'Youtube Watch Id'

  useEffect(() => {
    // fetch the 'trailer video' by using tmdb_id of movie
    const getMovieTrailer = async () => {
      // !!! APIs not working to fetch data by id. so, Using Static hard-coded dummy data trailer.
      /*
      const responseObj = await fetch(
        KINOCHECKAPI__MoviesURL + tmdbId,
        KINOCHECKAPI__HeaderOptions
      ); // "299534"
      const jsonData = await responseObj.json();
      // console.log( jsonData);

      const trailerObj = jsonData?.trailer;
      // console.log(trailerObj);
      // const key = trailerObj.youtube_video_id;
      */

      // Youtube Embeded Player
      const watchKey = "taE3PwurhYM";
      const youtubeWatchLink = "https://www.youtube.com/watch?v=" + watchKey;
      setWatchId(watchKey); // Updates the state
    };
    getMovieTrailer();
  }, []); // runs only on initial first render

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + watchId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
