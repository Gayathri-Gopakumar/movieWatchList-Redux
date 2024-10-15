import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieList from './components/movieList';
import AddMovieForm from './components/addMovieForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className='text-warning text-center fw-bold'>Movie Watchlist</h1>
        <AddMovieForm />
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;

