import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'


function App() {

  // const [Loading, setLoading] = useState(true)
  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    // esta es la funcion que se ejecuta cuando 
    // llega la informacion de nuestra ubicacion actual
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setcoords(obj);
    }
    // esto de aca hace el llamado a la api del navegador,
    //  para usar la ubicacion actual
    navigator.geolocation.getCurrentPosition(success)
    //COLOCAR FORMULA PARA ALERTA DE QUE ACTIVE LA UBICACION 
  }, [])

  console.log(coords);

  // -------------------------PETICION DEL CLIMA---------------------------------------
  useEffect(() => {
    if (coords) {
      const APIKEY = `58b6d88194a08c526b97836ad50ad199`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          setTemperature({ celsius, farenheit })
          setweather(res.data)
        })
        .catch(err => console.log(err))

    }

  }, [coords])


  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temperature={temperature} />
          : <Loading />
      }
      <section>
      </section>
    </div>

  )
}

export default App
