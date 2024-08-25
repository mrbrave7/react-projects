import PropTypes from 'prop-types'; // Import PropTypes
import Icons from "../Utilities/Icon"; // Import the Icons component

function Oneday({ day }) {
  console.log(day)
  return (
    <div className="p-4 w-80 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md bg-opacity-50">
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"time"} />
        </span>
        <span>{day.datetime}</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-8 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={day.icon} />
        </span>
        <span className="text-base w-full"> {day.conditions}</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"temp"} />
        </span>
        <span>{day.temp}&deg;F</span> {/* Accessing day.temp instead of hour.temp */}
      </h1>
      <h1 className="flex items-center overflow-hidden justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-base w-[18rem]">
        <span className=""> {day.description}</span> {/* Accessing day.descriptions instead of hour.descriptions */}
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"sunrise"} />
        </span>
        <span> {day.sunrise}&deg;</span> {/* Accessing day.sunrise instead of hour.sunrise */}
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"sunset"} />
        </span>
        <span> {day.sunset}&deg;</span> {/* Accessing day.sunrise instead of hour.sunrise */}
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"windspeed"} />
        </span>
        <span className="text-base"> {day.set}KM/H</span> {/* Accessing day.set instead of hour.set */}
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"moonphase"} />
        </span>
        <span> {day.moonphase}%</span> {/* Accessing day.moonphase instead of hour.moonphase */}
      </h1>
    </div>
  );
}

Oneday.propTypes = {
  day: PropTypes.shape({
    datetime: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    sunrise: PropTypes.number.isRequired,
    sunset: PropTypes.number.isRequired,
    set: PropTypes.number.isRequired,
    moonphase: PropTypes.number.isRequired,
  }).isRequired,
};

export default Oneday;
