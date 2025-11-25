// redux store
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;

// Redux, Toolkit installation:
// npm install react-redux @reduxjs/toolkit
