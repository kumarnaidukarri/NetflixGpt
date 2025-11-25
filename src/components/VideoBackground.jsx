// video background of Main Container of Browse Page

import { useEffect } from "react";

const VideoBackground = (props) => {
  const { tmdbId } = props;

  // fetch the 'trailer video' by using tmdb_id of movie
  const getMovieVideos = async () => {};

  useEffect(() => {
    getMovieVideos();
  }, []);

  return <div>VideoBackground</div>;
};

export default VideoBackground;
