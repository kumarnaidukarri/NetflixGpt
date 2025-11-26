// Main container of 'Browse Page'

import { useSelector } from "react-redux";

// my components
import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
  const movies = useSelector((appStore) => appStore.movies?.nowPlayingMovies); // Subscribe to Redux store
  if (movies === null) return;

  const mainMovie = movies[0];
  console.log("main movie:- ", mainMovie);

  /*
  const {
    title,
    id,
    imdb_id,
    tmdb_id,
    poster_url,
    overview = "This is the overview of the movie ...",
  } = mainMovie;
  */

  const klausObj = {
    title: "Klaus",
    id: "t4729430",
    imdb_id: "t4729430",
    tmdb_id: "t4729430",
    poster_url:
      "https://www.imdb.com/title/tt4729430/mediaviewer/rm1843825409/?ref_=tt_ov_i",
    overview:
      "A simple act of kindness always sparks another, even in a frozen, faraway place. When Smeerensburg's new postman, Jesper, befriends toymaker Klaus, their gifts melt an age-old feud and deliver a sleigh full of holiday traditions",
  };
  const {
    title,
    id,
    imdb_id,
    tmdb_id,
    poster_url,
    overview = "This is the overview of the movie ...",
  } = klausObj;
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
