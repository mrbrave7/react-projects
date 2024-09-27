import { useEffect, useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { MovieProvider } from './Utils/MovieProvider';
import fetchMovies from './Utils/fetchMovie';
import Navbar from './Components/Navbar/Navbar';
import Category from './Components/Category/Category';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [fullApiUrl, setFullApiUrl] = useState('https://api.themoviedb.org/3/trending/all/week?language=en-US&page=1'); // combined state

  // Set the API URL based on category and page
  const setApiUrl = (url) => {
    setFullApiUrl(`${url}${page}`);  // Include the page directly
  };

  // Set Page Number and update API URL accordingly
  const setPageNumber = (newPage) => {
    setPage(newPage);
    setFullApiUrl(prevUrl => prevUrl.replace(/page=\d+/, `page=${newPage}`)); // Update page in the URL
  };

  // Set the current selected movie
  const setMovie = (movie) => {
    setCurrentMovie(movie);
  };

  // Set all movies fetched from the API
  const setMovies = (movies) => {
    setAllMovies(movies);
  };

  // Add movie to favorites
  const addToFavorite = (movie) => {
    setFavoriteMovies((prevValue) => [movie, ...prevValue]);
  };

  // Remove movie from favorites
  const deleteFromFavorite = (movie) => {
    setFavoriteMovies((prevValue) =>
      prevValue.filter((item) => item !== movie)
    );
  };

  // Memoized fetch function to prevent re-creation
  const fetchMovie = useCallback(async (url) => {
    try {
      const result = await fetchMovies(url);
      // console.log(result);
      setMovies(result.results); // Assuming result.results contains the movie data
    } catch (error) {
      console.error(error);
    }
  }, [setMovies]);

  // Fetch movies when fullApiUrl changes
  useEffect(() => {
    if (fullApiUrl) {
      fetchMovie(fullApiUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [fullApiUrl]);

  return (
    <MovieProvider
      value={{
        allMovies,
        currentMovie,
        setMovie,
        setMovies,
        addToFavorite,
        deleteFromFavorite,
        page,
        setPageNumber,
        favoriteMovies,
        setApiUrl,
        fullApiUrl,
      }}
    >
      <Navbar />
      <Category />
      <Outlet />
    </MovieProvider>
  );
}

export default App;
