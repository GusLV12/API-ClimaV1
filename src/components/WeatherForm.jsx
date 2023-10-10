import { useState } from "react"
import style from './weatherForm.module.css';

function WeatherForm({onChangeCity}) {
  const [city,setCity] = useState('');

  function onChange(e){
    const value = e.target.value;
    if(value !== ''){
      setCity(value);
    }
  }

  function handleSubmit(e){
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <input type="text" onChange={onChange} className={style.input}/>
    </form>
  )
}

export default WeatherForm