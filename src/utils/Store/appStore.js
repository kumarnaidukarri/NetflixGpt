// redux store
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import gptReducer from "./GptSlice.js";
import languageReducer from "./languageSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    language: languageReducer,
  },
});

export default appStore;

// Redux, Toolkit installation:
// npm install react-redux @reduxjs/toolkit
