// video background of Main Container of Browse Page

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  KINOCHECKAPI__MoviesURL,
  KINOCHECKAPI__HeaderOptions,
} from "../utils/constants.js"; // video api url
import { addTrailerVideo } from "../utils/Store/moviesSlice.js"; // redux action

const VideoBackground = (props) => {
  const { tmdbId } = props;

  const dispatch = useDispatch();
  const trailer = useSelector((appStore) => appStore.movies?.trailerVideo);
  /* const [watchId, setWatchId] = useState(null); */ // state variable to store 'Youtube Watch Id'

  useEffect(() => {
    // fetch the 'trailer video' and Update the Redux Store
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

      /* setWatchId(watchKey); */ // Updates the state

      // Dispatching an action will updates the store.
      dispatch(addTrailerVideo({ watchKey, youtubeWatchLink }));
    };
    getMovieTrailer();
  }, []); // runs only on initial first render

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailer?.watchKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
