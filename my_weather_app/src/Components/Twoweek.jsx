import { useContext, useRef } from "react";
import Oneday from "./Oneday"
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import WeatherContext from "../Contexts/WeatherContext";

function WholeDay() {
  const scrollRef = useRef(null);
  const{weatherData} = useContext(WeatherContext)
  const days = weatherData.days
  console.log(days)
  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 344;
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 344; 
    }
  }

  return (
    <div className="relative w-full flex justify-center m-auto items-center">
      <h1
        onClick={scrollLeft}
        className="text-2xl z-10 -left-5 h-10 w-12 text-white absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <FaCircleChevronLeft />
      </h1>
      <h1
        onClick={scrollRight}
        className="text-2xl z-10 -right-5 h-10 w-12 text-white absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <FaCircleChevronRight />
      </h1>
      <div 
      className="p-4 flex gap-6 overflow-hidden w-full scroll-smooth scrollbar-hide" ref={scrollRef}>
        {
          Object.keys(days).map((index) => (
            <Oneday key={index} day={days[index]} />
          ))
        }
      </div>
    </div>
  );
}

export default WholeDay;
