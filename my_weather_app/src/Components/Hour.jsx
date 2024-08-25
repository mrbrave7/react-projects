import PropTypes from "prop-types";
import Icons from "../Utilities/Icon"; // Import the Icons component

function Day({ hour }) {
  console.log(hour);
  return (
    <div className="p-4 bg-gray-900 w-80 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md bg-opacity-50">
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"time"} />
        </span>
        <span>{hour.datetime}</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-8 border-neutral-500 text-white text-lg w-40">
        <span>
          <Icons param={hour.icon} />
        </span>
        <span className="text-base w-full"> {hour.conditions}</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"temp"} />
        </span>
        <span>{hour.feelslike}&deg;F</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"pressure"} />
        </span>
        <span> {hour.pressure}</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"winddirection"} />
        </span>
        <span> {hour.winddir}&deg;</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"windspeed"} />
        </span>
        <span className="text-base"> {hour.windspeed}KM/H</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"humidity"} />
        </span>
        <span> {hour.humidity}%</span>
      </h1>
      <h1 className="flex items-center justify-between border-b-[1px] gap-5 border-neutral-500 text-white text-lg w-full">
        <span>
          <Icons param={"visibility"} />
        </span>
        <span> {hour.visibility}%</span>
      </h1>
    </div>
  );
}

Day.propTypes = {
  hour: PropTypes.shape({
    datetime: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    conditions: PropTypes.string.isRequired,
    feelslike: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    winddir: PropTypes.number.isRequired,
    windspeed: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
  }).isRequired,
};

export default Day;
