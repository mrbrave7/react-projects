import { useContext } from "react";
import CurrentCondition from "./Components/CurrentCondition";
import Navbar from "./Components/Navbar";
import Place from "./Components/Place";
import WholeDay from "./Components/WholeDay";
import WeatherContext from "./Contexts/WeatherContext";
import Twoweek from "./Components/Twoweek"
function App() {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData)
  return (
    <>
      <div className="bg-[url(https://random.imagecdn.app/1920/1080)] min-h-screen w-screen flex flex-col md:items-center md:justify-center gap-10 md:p-8 p-8">
        <Navbar />
        {weatherData ? (
          <>
            <div className=" w-full gap-4 flex items-center justify-between">
              <CurrentCondition />
              <Place />
            </div>
            <div className="p-4 w-full bg-gray-100 overflow-visible bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
              <h1 className="text-xl text-white">24 Hours Forecast</h1>
              <WholeDay />
            </div>
            <div className="p-4 w-full bg-gray-100 overflow-visible bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
              <h1 className="text-xl text-white">15 Days Forecast</h1>
              <Twoweek />
            </div>
          </>
        ) : (
          <div className="px-4 w-full flex items-center justify-center min-h-60  ">
            <h1 className="md:text-[6rem] text-2xl w-full h-full py-40 text-center text-white uppercase bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md bg-opacity-50">
              Data Not Available
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
