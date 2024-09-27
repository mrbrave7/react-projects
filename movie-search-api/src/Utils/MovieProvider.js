/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const MovieContext = createContext({
    currentMovie:{},
    page:"",
    apiUrl:"",
    allMovies:[],
    favoriteMovies:[],
    setPageNumber:(value) => {},
    deleteFromFavorite:(movie) => {},
    addToFavorite:(movie) => {},
    setCurrentMovie:(movie) => {},
    setMovies:(movies) => {},
    setApiUrl:(url) => {}
})

export const useMovie = () => {
    return useContext(MovieContext)
}
export const MovieProvider = MovieContext.Provider