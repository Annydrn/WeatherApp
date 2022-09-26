import React, { useState } from "react";
import { useTranslation } from "react-i18next"


const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setisCelsius] = useState(true)
  const changeTemperature = () => setisCelsius(!isCelsius)

  console.log(weather);

  //constante para enlazar traductor para app mediante libreria i18Next
  const [t, i18n] = useTranslation("global")

  return (
    <article className="card">
      <button className="btn_flags" onClick={() => i18n.changeLanguage("es")} > <img className="flags1"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/135px-Bandera_de_Espa%C3%B1a.svg.png"
        alt="" /></button>

      <button className="btn_flags" onClick={() => i18n.changeLanguage("en")}>
        <img className="flags2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/135px-Flag_of_the_United_States.svg.png"
          alt="" /> </button>

      <h1 className="card_title">{t("weather-app")}</h1>
      <h2 className="card_subtitle">{`${weather?.name},${weather?.sys.country}`}</h2>
      <section className="card_first-section">
        <img className="card_icon" src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png
`} alt="" />
      </section>
      <section className="card_second-section">
        <h3 className="second_title">"{weather?.weather[0].description}"</h3>
        <ul className="second_list">
          <li className="second_item"><span className="second_spam">Wind Speed</span>{weather?.wind.spreed} m/s</li>
          <li className="second_item"><span className="second_spam">Clouds</span> {weather?.clouds.all} %</li>
          <li className="second_item"><span className="second_spam">Pressure</span> {weather?.main.pressure} hPa</li>
        </ul>
      </section>
      <h3 className="temperature_title">Temperature</h3>
      <h2 className="card_temperature">{isCelsius ? `${temperature?.celsius} ºC` : `${temperature?.farenheit} ºF`}</h2>
      <button className="card_btn" onClick={changeTemperature} >{isCelsius ? `° Farenheit` : `°Celsius`}</button>
    </article>
  );
};

export default WeatherCard;
