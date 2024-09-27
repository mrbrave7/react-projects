/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa6"; // Import half star if needed
import "./Movie.css";

function Movie() {
  const data = useLoaderData();

  if (!data) {
    return <p>Loading...</p>; // Handle when loader data is not available
  }

  const {
    movieDetail = {}, // Default empty object in case it's undefined
    movieImages = { backdrops: [] }, // Default empty array for backdrops
    movieCredit = {}
  } = data;

  console.log(movieDetail);
  console.log(movieImages);
  console.log(data);

  const posterUrl = movieDetail.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`
    : movieDetail.backdrop_path
      ? `https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`
      : "/path/to/fallback-image.jpg"; // Provide a fallback image

  // Round the vote_average to the nearest half-star for review display
  const voteAverage = Math.round(movieDetail.vote_average * 2) / 2;
  const fullStars = Math.floor(voteAverage); // Number of full stars
  const halfStar = voteAverage % 1 !== 0;

  return (
    <main className="movie-description-page">
      <div className="upper-description">
        <div className="details">
          <h1>{movieDetail.original_title}</h1>
          <div className="genres-names">
            {movieDetail.genres.map((genre, index) => (
              <p key={index} className="genre">{genre.name}</p>
            ))}
          </div>
          <div className="Origin-country">
            <p>Origin Country</p>
            <h3>{movieDetail.origin_country ? movieDetail.origin_country[0] : "N/A"}</h3>
          </div>
          <div className="description">
            <h3>Description</h3>
            <p>{movieDetail.overview}</p>
          </div>
          <div className="runtime">
            <h3>Runtime</h3>
            <p>{movieDetail.runtime ? `${movieDetail.runtime} minutes` : "N/A"}</p>
          </div>
          <div className="review">
            {/* Render full stars */}
            {Array(fullStars).fill().map((_, index) => (
              <FaStar key={index} />
            ))}
            {/* Render half-star if necessary */}
            {halfStar && <FaStarHalfAlt />}
            {/* Display vote average value */}
            <span> ({voteAverage}/10)</span>
          </div>
        </div>
        <div className="poster">
          <img src={posterUrl} alt={movieDetail.title || "Movie poster"} />
          <div className="shadow"></div>
        </div>
      </div>

      <h1>Casts</h1>
      <div className="cast-name">
        {movieCredit.cast.slice(0, 15).map((cas, index) => {
          if (!cas.profile_path) {
            return null; // Skip cast with no profile image
          }
          return (
            <div className="cast-detail-card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cas.profile_path}`}
                alt={`${cas.original_name}`}
              />
              <h3>{cas.name.substring(0, 12)}</h3>
            </div>
          );
        })}
      </div>

      <h1>Movie Plots</h1>
      <div className="scenes">
        {movieImages.backdrops.length > 0 ? (
          movieImages.backdrops
            .filter((backdrop) => !backdrop.iso_639_1)
            .map((backdrop) => (
              <img
                className="movie-scenes"
                key={backdrop.file_path} // Use unique key
                src={`https://image.tmdb.org/t/p/w500/${backdrop.file_path}`}
                alt={`${movieDetail.title || "Movie"} backdrop`} // Meaningful alt text
              />
            ))
        ) : (
          <p>No backdrops available.</p>
        )}
      </div>
    </main>
  );
}

export default Movie;
