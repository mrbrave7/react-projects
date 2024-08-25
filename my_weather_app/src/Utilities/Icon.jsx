import { FaCloudSun } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { GiDew } from "react-icons/gi";
import { FaRegSnowflake, FaCloud } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { LuWind } from "react-icons/lu";
import { CgCompressV } from "react-icons/cg";
import { MdVisibility } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";
import { GiSunRadiations } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiMoon } from "react-icons/gi";
import { BsCloudLightningRainFill } from "react-icons/bs";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { IoPartlySunnySharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import PropTypes from "prop-types"
const Icons = ({ param }) => {
  switch (param) {
    case "moonphase":
      return <GiMoon />
    case "time":
      return <IoIosTime />
    case "Partially cloudy":
      return <FaCloudSun />;
    case "partly-cloudy-night":
      return (
        <h1 className="text-white">
          <FaCloudMoon />
        </h1>
      );
    case "humidity":
      return <WiHumidity />;
    case "dew":
      return <GiDew />;
    case "snow":
      return <FaRegSnowflake />;
    case "winddirection":
      return <GiWindsock />;
    case "windspeed":
      return <LuWind />;
    case "pressure":
      return <CgCompressV />;
    case "visibility":
      return <MdVisibility />;
    case "uvindex":
      return <TbUvIndex />;
    case "solarradiation":
      return <GiSunRadiations />;
    case "sunrise":
      return <WiSunrise />;
    case "sunset":
      return <WiSunset />;
    case "cloudy":
      return (
        <h1 className="text-white">
          <FaCloud />
        </h1>
      );
    case "clear-day":
      return <h1 className="text-yellow-600"><IoIosSunny /></h1>
    case "clear-night":
      return <h1 className="text-neutral-50"><IoIosMoon /></h1>
    case "partly-cloudy-day":
      return <h1 className="text-neutral-300"><IoPartlySunnySharp/></h1>
    case "rain":
      return <h1 className="text-white"><BsCloudLightningRainFill /></h1>
    case "temp":
      return <FaTemperatureHigh />
    }
};

Icons.propTypes = {
  param: PropTypes.string.isRequired,
};

export default Icons;
