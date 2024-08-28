import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorBoundary from './components/Errorboundry.jsx'
import Gamestart from "./pages/gameStart/Gamestart.jsx"
import Game from './pages/Gamepage/Game.jsx'
import Gameover from "./pages/Gameover/Gameover.jsx"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App />,
      children:[
        {
          path:"/",
          element:<Gamestart />
        },
        {
          path:"/gamepage",
          element:<Game />
        },
        {
          path:"/gameover",
          element:<Gameover />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
    <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)
