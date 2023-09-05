import { useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState(0)
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState(true)

  useEffect(() => {
    const sucess = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon:pos.coords.longitude,
      }

      setCoords(obj)
      
    }
    
    navigator.geolocation.getCurrentPosition(sucess)
  }, [])

  useEffect(() => {
    if(coords){
      const ApiKey = '6e5879dc9b9115ef2142cb1b00e561bd'
      const url= `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(url)
      .then(res => { 
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit: (res.data.main.temp - 273.15) * 9/5 + 32,
        }
          setTemp(obj)
      })
      .catch(err => console.log(err))
      }   
  }, [coords])

  return (
    <div>
      <WeatherCard weather = {weather}
      temp = {temp}/>
    </div>
  )
}

export default App
