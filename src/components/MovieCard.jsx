// Movie Card component for horizontal scroll list

const MovieCard = ({ posterUrl }) => {
  // if there is no poster image url. skip it.
  if (posterUrl === "" || posterUrl === undefined || posterUrl === null) {
    // return null;
    return (
      <div className="movie-card  w-36 md:w-48 pr-5">
        <img
          src={"https://placehold.co/150x225?text=Movie Card Image"}
          alt="movie card"
          className="mb-5"
        />
      </div>
    );
  }

  return (
    <div className="movie-card  w-48 pr-5">
      <img src={posterUrl} alt="movie card" />
    </div>
  );
};

export default MovieCard;
