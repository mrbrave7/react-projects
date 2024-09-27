import fetchMovies from "./fetchMovie";
export async function movieDetail({params}) {
    const movieId = params.movieId;
    if(movieId){
        console.log(movieId)
    }
    const details = {
        detail: `https://api.themoviedb.org/3/movie/${movieId}?language=All`,
        changes: `https://api.themoviedb.org/3/movie/${movieId}/changes?page=1`,
        credits: `https://api.themoviedb.org/3/movie/${movieId}/credits?language=All`,
        images: `https://api.themoviedb.org/3/movie/${movieId}/images`,
        keyWords: `https://api.themoviedb.org/3/movie/${movieId}/keywords`,
        reviews: `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        translation: `https://api.themoviedb.org/3/movie/${movieId}/translations`,
        videos: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        watchProviders: `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`
    };
    
    try {
        const movieDetail = await fetchMovies(details.detail);
        const changesDetail = await fetchMovies(details.changes);
        const movieCredit = await fetchMovies(details.credits);
        const movieImages = await fetchMovies(details.images);
        const movieKeywords = await fetchMovies(details.keyWords);
        const movieReviews = await fetchMovies(details.reviews);
        const movieTranslation = await fetchMovies(details.translation);
        const movieVideos = await fetchMovies(details.videos);
        const movieProviders = await fetchMovies(details.watchProviders);

        // Return an object containing all the fetched data
        const movieDetailData = {
            movieDetail,
            changesDetail,
            movieCredit,
            movieImages,
            movieKeywords,
            movieReviews,
            movieTranslation,
            movieVideos,
            movieProviders,
        };
        return movieDetailData; // No trailing comma
    } catch (error) {
        console.log(error);
    }
}