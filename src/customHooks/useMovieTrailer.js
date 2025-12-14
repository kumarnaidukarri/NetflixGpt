// Custom hook to fetch 'Movie Trailer Video' data and Updates the Redux Store.

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/Store/moviesSlice.js"; // redux action

import {
  KINOCHECKAPI__MoviesURL,
  KINOCHECKAPI__HeaderOptions,
} from "../utils/constants.js"; // video api url

const useMovieTrailer = (tmdbId) => {
  const dispatch = useDispatch();
  /* const [watchId, setWatchId] = useState(null); */ // state variable to store 'Youtube Watch Id'

  const trailerVideo = useSelector(
    (appStoreState) => appStoreState.movies.trailerVideo
  ); // subscribes to portion of Movie slice from redux store

  useEffect(() => {
    // fetch the 'trailer video' data and Update the Redux Store
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

    // *** Conditional Caching technique - will execute only if no data is present.
    if (!trailerVideo) {
      getMovieTrailer();
    }
  }, []); // runs only on initial first render
};

export default useMovieTrailer;
