/* eslint-disable react-hooks/exhaustive-deps */
import { useMovie } from '../../Utils/MovieProvider';
import "./Movies.css"
import { Link } from 'react-router-dom';
import Paginator from '../../Components/Paginator/Paginator';

function Movies() {
  const { allMovies } = useMovie();
  return (
    <main>
      
      <section className="movies">
        {allMovies && allMovies.length > 0 ? (
          allMovies.map((singleMovie, index) => {
            return (
              <div key={index} className='singleMovie'>
                <img src={`https://image.tmdb.org/t/p/w500/${singleMovie.poster_path? singleMovie.poster_path : singleMovie.backdrop_path}`} alt="" />
                <Link to={`/${singleMovie.id}`}><span className='movie-name'>{singleMovie.name ? singleMovie.name : singleMovie.title}</span></Link>
              </div>
            );
          })
        ) : (
          <h1>Movies Not Available</h1>
        )}
      </section>
      <Paginator/>
    </main>
  );
}

export default Movies;
