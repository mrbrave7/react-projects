import Icons from "../Utilities/Icon";
import WeatherContext from "../Contexts/WeatherContext";
import { useContext } from "react";
function CurrentCondition() {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);
  const CurrentCondition = weatherData.currentConditions;
  // console.log(CurrentCondition);
  return (
    <>
      <div className="flex items-center flex-col gap-10 justify-between w-full text-black uppercase p-4 md:p-10 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md bg-opacity-50">
        <div className="w-full flex md:flex-row flex-col-reverse items-center justify-between">
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-white md:text-6xl">
              {CurrentCondition.temp}&deg; F
            </h1>
            <h1 className="text-white text-base">
              {CurrentCondition.conditions}
            </h1>
            <h1 className="text-white text-base">
              <span>Feels Like </span>
              {CurrentCondition.feelslike} &deg; F
            </h1>
          </div>
          <div className="flex items-center w-[22rem] justify-center">
            <h1 className="text-center text-[14px] py-4 md:text-lg text-wrap text-white">
              {weatherData.description}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="md:text-[8rem] text-8xl">
              <Icons param={CurrentCondition.icon} />
            </h1>
          </div>
        </div>
        <div className="flex items-center flex-wrap justify-between md:gap-4 gap-4 w-full">
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Humidity
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"humidity"} />
              </h1>
              <h1 className="md:text-2xl text-xl text-white">
                {CurrentCondition.humidity}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Dew
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className=" md:text-4xl text-2xl text-white">
                <Icons param={"dew"} />
              </h1>
              <h1 className=" md:text-2xl text-xl text-white">
                {CurrentCondition.dew}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] text-sm">Radiation</h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"solarradiation"} />
              </h1>
              <h1 className="md:text-2xl text-xl text-white">
                {CurrentCondition.solarradiation}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Wind Speed
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"windspeed"} />
              </h1>
              <h1 className="md:text-xl text-base text-white">
                {CurrentCondition.windspeed}K/H
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Wind dir
            </h1>
            <div className="flex items-center justify-center gap-2">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"winddirection"} />
              </h1>
              <h1 className="md:text-2xl text-base text-white">
                {CurrentCondition.winddir}&deg;
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-2 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Pressure
            </h1>
            <div className="flex items-center justify-center gap-2">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"pressure"} />
              </h1>
              <h1 className="md:text-2xl text-base text-white">
                {CurrentCondition.pressure}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-4 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Visibility
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"visibility"} />
              </h1>
              <h1 className="md:text-2xl text-base text-white">
                {CurrentCondition.visibility}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-4 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              UV Index
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"uvindex"} />
              </h1>
              <h1 className="md:text-2xl text-base text-white">
                {CurrentCondition.uvindex}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-4 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Sun Rise
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"sunrise"} />
              </h1>
              <h1 className="md:text-xl text-base text-white">
                {CurrentCondition.sunrise}
              </h1>
            </div>
          </div>
          <div className="p-4 w-[8rem] md:w-[10rem] bg-gray-900 flex items-center flex-col justify-center gap-4 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 text-center">
            <h1 className="text-center text-white text-[14px] md:text-sm">
              Sun Set
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1 className="md:text-4xl text-2xl text-white">
                <Icons param={"sunset"} />
              </h1>
              <h1 className="md:text-xl text-base text-white">
                {CurrentCondition.sunset}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCondition;
