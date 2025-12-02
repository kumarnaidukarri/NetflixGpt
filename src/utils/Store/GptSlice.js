// Gpt slice stores data of Gpt.

import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesNames: null,
    gptMoviesResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch; // updates state
    },
    addGptMoviesResults: (state, action) => {
      const { moviesNames, moviesResults } = action.payload;
      state.gptMoviesNames = moviesNames; // updates the state
      state.gptMoviesResults = moviesResults; // updates the state
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions;
export default gptSlice.reducer;
