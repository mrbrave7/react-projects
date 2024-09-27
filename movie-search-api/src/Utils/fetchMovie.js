
/* eslint-disable no-unused-vars */
const apiKey = "4de62105c9b4ea9c282f3231a71aed81";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGU2MjEwNWM5YjRlYTljMjgyZjMyMzFhNzFhZWQ4MSIsIm5iZiI6MTcyNzAwNTYzMS4wODE4MzMsInN1YiI6IjY2ZDY5OWYyNGFhZjUyN2RiOWJkMjFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwFVYJKWm5a4tZ1Ga73KdcdSkOwIOhyghRRRzxeshHc'
    }
};

const fetchMovies = async (url) => {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            console.log("Can't get response");
        }
        const data = response.json(); // You need to await the response.json() here
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default fetchMovies
