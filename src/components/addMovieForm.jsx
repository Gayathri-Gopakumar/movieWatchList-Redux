import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../features/movieslice';

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovie({ title, releaseDate, genre, rating }));
    setTitle('');
    setReleaseDate('');
    setGenre('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center'>
      <h2 className='text-warning me-2'>Add Movie</h2>
      <input
        className='me-1'
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
      className='me-1'
        type="text"
        placeholder="Release Date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        required
      />
      <input
      className='me-1'
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
      className='me-1'
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <button className='ms-3 rounded bg-success text-light' type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
