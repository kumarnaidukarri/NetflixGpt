// Main container of 'Browse Page'

import { useSelector } from "react-redux";

// my components
import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
  const movies = useSelector(
    (appStore) => appStore.movies?.addNowPlayingMovies
  ); // Subscribe to Redux store
  if (movies === null) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const {
    title,
    id,
    imdb_id,
    tmdb_id,
    poster_url,
    overview = "This is the overview of the movie ...",
  } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground tmdbId={tmdb_id} />
    </div>
  );
};

export default MainContainer;

/*
Main container 
  - video background
  - video title
*/
