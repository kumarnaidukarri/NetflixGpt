// video background of Main Container of Browse Page

import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer"; // custom hook to update redux store with movie trailer data

const VideoBackground = (props) => {
  const { tmdbId } = props;

  useMovieTrailer(tmdbId); // update the redux store
  const trailer = useSelector((appStore) => appStore.movies?.trailerVideo); // Subscribing to slice of store

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.watchKey +
          `?autoplay=1&mute=1&loop=1&playlist=${trailer?.watchKey}&controls=0&rel=0&modestbranding=1`
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
