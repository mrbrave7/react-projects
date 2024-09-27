import { useEffect } from "react";
import fetchMovies from "../../Utils/fetchMovie";
import { useMovie } from "../../Utils/MovieProvider";
import "./Category.css";
import { useNavigate } from "react-router-dom";

function Category() {
    const navigate = useNavigate()
    const { setMovies, setApiUrl, apiUrl, page } = useMovie(); // Destructure apiUrl and page from useMovie
    const urls = {
        nowPlaying: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=",
        popularEnglish: "https://api.themoviedb.org/3/movie/popular?language=All&page=",
        topRated: "https://api.themoviedb.org/3/movie/top_rated?language=All&page=",
        upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=All&page=",
        trending: "https://api.themoviedb.org/3/trending/all/day?language=All&page=",
    };

    // Fetch movies when apiUrl changes
    useEffect(() => {
        if (apiUrl) {  // Only fetch if apiUrl is not null or undefined
            async function fetchMovi() {
                try {
                    const movies = await fetchMovies(apiUrl);
                    // console.log(movies);
                    setMovies(movies.results);  // Assuming 'movies.results' contains the movie data
                } catch (error) {
                    console.log(error);
                }
            }
            fetchMovi();
        }
    }, [apiUrl, setMovies]);  // This useEffect will run whenever apiUrl is updated

    // Handle button click
    function handleClick(url) {
        setApiUrl(`${url}${page}`);  // Set the full API URL including the page
        navigate("/")
    }

    // Trigger fetch when page changes (in case you want to refetch data when page changes)
    useEffect(() => {
        if (apiUrl) {
            setApiUrl(prevUrl => prevUrl.replace(/page=\d+/, `page=${page}`));  // Update only the page number in the URL
        }
    }, [page, setApiUrl]);  // Triggered when page changes

    return (
        <nav>
            <ul className="category-list">
                {
                    // Use Object.entries to get both key and URL
                    Object.entries(urls).map(([category, url], index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => handleClick(url)}>
                                    {category}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Category;
