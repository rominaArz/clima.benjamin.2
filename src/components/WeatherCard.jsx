import React, { useState } from 'react'

const WeatherCard = ( { weather, temp } ) => {

  const [ isCelsius, setIsCelsius] = useState(true)
  
  const HandleChangeTemp = () => setIsCelsius(!setIsCelsius)
  
  
  
  return (
    <article>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div>
        <div>
        <img src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="" 
        />
      </div>
      <section>
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span>Wind Speed </span><span>{weather?.wind.speed} m/s</span></li>
          <li><span>Clouds </span><span>{weather?.clouds.all}  %</span></li>
          <li><span>Pressure </span><span>{weather?.main.pressure} hPa</span></li>
        </ul>
      </section>
      </div>
       <h2>{isCelsius ? `${temp?.celsius} C`: `${temp?.farenheit} F` }</h2>

       <button onClick={HandleChangeTemp}>{isCelsius? 'Change To F' : 'Change to C'} </button>
    </article>
  )
}

export default WeatherCard