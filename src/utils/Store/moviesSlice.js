// this slice contains Movie data.

import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, trailerVideo: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload; // updating the state
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload; // updating the state
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
