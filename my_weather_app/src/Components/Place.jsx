import WeatherContext from '../Contexts/WeatherContext';
import { useContext } from 'react';
import Clock from './Clock';
function Place() {
    const { weatherData } = useContext(WeatherContext);
  return (
    <div className='text-center text-5xl w-[27rem] hidden text-white lg:flex flex-col gap-[1.95rem] uppercase py-8 px-6 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl rounded-md bg-opacity-50 '>
        <h1 className='text-center text-2xl'>Current</h1>
            <h1 className='text-sm py-2 text-white px-8 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 w-full text-center '>{weatherData.resolvedAddress}</h1>
            <h1 className='text-sm py-2 text-white px-8 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 w-full text-center '>TIME ZONE : {weatherData.timezone}</h1>
            <h1 className='text-base py-2 text-white px-8 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 w-full text-center '>LAT : {weatherData.latitude}</h1>
            <h1 className='text-base py-2 text-white px-8 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 w-full text-center '>LON : {weatherData.longitude}</h1>
            <h1 className='text-base py-2 text-white px-8 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-3xl rounded-md bg-opacity-10 w-full text-center '>TIME : <Clock /></h1>
    </div>
  )
}

export default Place