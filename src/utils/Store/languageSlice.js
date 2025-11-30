// this slice stores "Language" data.

import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload; // updates the state
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
