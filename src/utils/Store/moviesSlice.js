// this slice contains Movie data.

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    popularMovies: null,
    //
    movies: null,
    tvSeries: null,
    tvSpecials: null,
    shortFilms: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; // updating the state
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // updating the state
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload; // updating the state
    },
    //
    addMovies: (state, action) => {
      state.movies = action.payload; // updating the state
    },
  },
});

export const {
  addTrailerVideo,
  addNowPlayingMovies,
  addPopularMovies,
  addMovies,
} = movieSlice.actions;
export default movieSlice.reducer;

// Movie categories types
// ["movie", "tv_series", "tv_miniseries", "tv_special", "short_film", "tv_movie"];
