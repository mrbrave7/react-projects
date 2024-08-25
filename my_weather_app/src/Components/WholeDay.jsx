import { useContext, useRef } from "react";
import Day from "./Hour";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import WeatherContext from "../Contexts/WeatherContext";

function WholeDay() {
  const scrollRef = useRef(null);
  const{weatherData} = useContext(WeatherContext)
  const hours = weatherData.days[0].hours
  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 400;
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 400; 
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
      className="p-4 flex gap-6 overflow-hidden w-[98%] scroll-smooth scrollbar-hide" ref={scrollRef}>
        {
          Object.keys(hours).map((index) => (
            <Day key={index} hour={hours[index]} />
          ))
        }
      </div>
    </div>
  );
}

export default WholeDay;
