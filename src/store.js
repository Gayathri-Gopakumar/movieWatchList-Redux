import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './features/movieslice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
