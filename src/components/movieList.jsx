import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, deleteMovie } from '../features/movieslice'; // Adjust the path as necessary

const MovieList = () => {
  const dispatch = useDispatch();
  
  // Select the movies, loading, and error state from Redux
  const { movies, loading, error } = useSelector((state) => state.movies);

  // Fetch movies on component mount
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Handle delete action
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  // Display loading state
  if (loading) return <div>Loading...</div>;

  // Display error state
  if (error) return <div>Error: {error}</div>;

  // Check if movies is an array before rendering
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
      <h2 className='text-warning fw-bolder'>Your Watchlist</h2>
      <ul>
        {movies.map((movie) => (
          <li className='mb-3 text-primary fw-bolder fs-3' key={movie.id}>
            <strong className='text-warning fw-bolder fs-3'>{movie.title}</strong> ({movie.releaseDate}) - {movie.genre} - Rating: {movie.rating}
            <button className='ms-3 rounded bg-danger text-light fs-5' onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

