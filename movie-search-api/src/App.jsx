import fetchMovies from "./Utils/fetchMovie"

function App() {
  function fetchMoviesData (){
    fetchMovies()
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })
  }
  return (
    <div>
      <button onClick={fetchMoviesData}>Fetch</button>
    </div>
  )
}

export default App
