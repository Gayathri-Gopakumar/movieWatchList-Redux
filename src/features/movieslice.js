import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';  // URL for JSON file.

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addMovie = createAsyncThunk('movies/addMovie', async (movie) => {
  const response = await axios.post(API_URL, movie);
  return response.data;
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updateMovie = createAsyncThunk('movies/updateMovie', async (movie) => {
  const response = await axios.put(`${API_URL}/${movie.id}`, movie);
  return response.data;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(movie => movie.id !== action.payload);
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(movie => movie.id === action.payload.id);
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      });
  },
});

export default movieSlice.reducer;
