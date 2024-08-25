import { useState } from 'react';
import PropTypes from 'prop-types';
import WeatherContext from './WeatherContext';

function WeatherContextProvider({ children }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [query, setQuery] = useState("");
    const [weatherData, setWeatherData] = useState("");

    return (
        <WeatherContext.Provider value={{ currentTime, setCurrentTime, query, setQuery, weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    );
}

WeatherContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WeatherContextProvider;

