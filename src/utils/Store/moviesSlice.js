// this slice contains Movie data.

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trailerVideo: null,
    nowPlayingMovies: null,
    popularMovies: null,
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
  },
});

export const { addTrailerVideo, addNowPlayingMovies, addPopularMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
