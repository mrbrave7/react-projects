import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Movies from "./Pages/Movies/Movies.jsx"
import Movie from "./Pages/Movie/Movie.jsx"
import Favorite from './Pages/Favorite/FAvorite.jsx'
import { movieDetail } from './Utils/fetchMovieDetails.js'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Movies />
      },
      {
        path: ":movieId",
        element: <Movie />,
        loader:movieDetail
      },
      {
        path:"/favorite",
        element:<Favorite />
      },
      
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
