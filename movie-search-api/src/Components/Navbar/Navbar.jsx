/* eslint-disable react/prop-types */
import { FaMagnifyingGlass } from "react-icons/fa6";
import {  useState } from "react";
import "./Navbar.css"
import { useMovie } from "../../Utils/MovieProvider";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
function Navbar() {
    const [movieName, setMovieName] = useState("");
    const { setApiUrl } = useMovie()
    function handleFormSubmit(event) {
        event.preventDefault();
        setApiUrl(`https://api.themoviedb.org/3/search/movie?&query=${encodeURIComponent(movieName)}&language=en-US&page=`);
        setMovieName("");
    }
    return (
        <nav className="navigation-bar">
            <Link to={"/"}><span>Movies.</span></Link>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    onChange={(event) => setMovieName(event.target.value)}
                    placeholder="Search Movie Name..."
                    value={movieName}
                />
                <button type="submit"><FaMagnifyingGlass /></button>
            </form>
            <div className="pages">
                <Link to={"/favorite"}><span>Favorite</span><CgProfile /></Link>
            </div>
        </nav>
    );
}

export default Navbar;


