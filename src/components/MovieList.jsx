// MovieList component is a "Horizontal Scrollable container" with  MovieCards.

// my components

import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 pt-12 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="movie-list  flex">
          {
            // Movie cards
            movies?.map((movie) => {
              return <MovieCard key={movie.id} posterUrl={movie?.poster_url} />;
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MovieList;
