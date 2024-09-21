const trendingMovieUrl = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
const SinglegMovieUrl = 'https://api.themoviedb.org/3/account/1022789';
const url = `http://www.omdbapi.com/?apikey=[abf7941b]&?t=avengers`
const apiKey = "ee4e2c69-6172-4b60-9a80-7c61670ecf13"
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2N2Q0YzhkZmEzZjBkZGYzOGVhZTMwY2E5NmViNjllMCIsIm5iZiI6MTcyNTM0MDY3My44NTYxODEsInN1YiI6IjY2ZDY5OWYyNGFhZjUyN2RiOWJkMjFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R7j-40RBGZZuvZ5PSG1wafTOpcyMzeD772Msz1Txml0'
    }
};

const fetchMovies = async () => {
    try {
        const response = await fetch(url,options)
        if(!response.ok){
            console.log("can't get response")
        }
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default fetchMovies