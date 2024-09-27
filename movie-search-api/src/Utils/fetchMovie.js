
/* eslint-disable no-unused-vars */
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:;
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
