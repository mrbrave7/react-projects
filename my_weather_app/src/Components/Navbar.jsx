import  { useContext } from "react";
import Logo from "/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import WeatherContext from "../Contexts/WeatherContext";
import fetchData from "../Utilities/fetchData";
function Navbar() {
  const { query, setQuery, setWeatherData } =
    useContext(WeatherContext);
  const handleClick = () => {
    console.log("Clicked");
    fetchData(query)
      .then((data) => setWeatherData(data))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-between w-full p-4 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md bg-opacity-50 ">
      <img src={Logo} className="md:h-20 h-10" alt="" />
      <div className="flex items-center justify-center px-4 md:gap-4 gap-2">
        <input
          type="text"
          placeholder="Find Weather"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="md:p-3 text-base w-40 md:w-64 text-white py-1 px-2 outline-none border-white border-2 rounded-md bg-transparent focus:bg-black focus:ring-2 focus:ring-white focus:text-white"
        />
        <button
          onClick={handleClick}
          className="border-2 w-8 h-8 p-2 text-base md:h-12 md:w-12 md:text-xl flex items-center justify-center  rounded-md border-white text-white hover:bg-black hover:text-neutral-50"
        >
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}
export default Navbar;
