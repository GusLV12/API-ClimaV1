import { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from './weatherApp.module.css'

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadingInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadingInfo(city = "Mexico city") {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?aqi=no&key=d486a62e492843b1af040406230410&q=${city}`
      );
      const data = await request.json();
      setWeather(data); 
      console.log(data);
    } catch (error) {
      console.error("Hubo un error!!!", error);
    }
  }
  function handleChangeCity(city) {
    setWeather(null);
    loadingInfo(city);
  }
  
  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}

export default WeatherApp;
