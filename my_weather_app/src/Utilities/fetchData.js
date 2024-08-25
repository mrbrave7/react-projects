// const fetchData = async (parameter) => {
//     try {
//         const response = await fetch(`${parameter}`);
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const jsonData = await response.json();
//         console.log(jsonData);
//         return jsonData;}
//         catch (error) {
      
//     }
// }
const fetchData = async(parameter) => {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${parameter}?key=RVBB3WMG7C7KBA9PSFRUVU42V`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export default fetchData