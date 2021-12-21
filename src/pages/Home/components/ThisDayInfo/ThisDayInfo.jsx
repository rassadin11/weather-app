import React from "react"
import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import s from "./ThisDayInfo.module.scss"
import foggy from '../../../../images/foggy.svg'
import { useSelector } from "react-redux";
import { getDirection, measureAmountOfRains, measurePowerOfWind } from "../../../UI";
import { storage } from "../../../../model/Storage";

const ThisDayInfo = (props) => {
  const { activeWeatherForecast } = useSelector(state => state.currentWeekday)

  if (!activeWeatherForecast.weekday) {
    return (<div className={s.rightBar}></div>)
  }

  return (
    <div className={s.rightBar}>
      <img className={s.backgroundIcon} src={foggy} alt="" />
      <div className={s.weather}>
        <div className={s.moreWeather}>
          <div className={`${s.weatherIcon} ${s.sun}`}>
            <div className={s.temp}><GlobalSvgSelector id="sunrise" /></div>
          </div>
          <p className={s.weatherTitle}>Sunrise and sunset</p>
          <p className={s.weatherText}>{activeWeatherForecast.sunrise} / {activeWeatherForecast.sunset}</p>
        </div>
        <div className={s.moreWeather}>
          <div className={s.weatherIcon}>
            <div><GlobalSvgSelector id="precipitation" /></div>
          </div>
          <p className={s.weatherTitle}>Precipitation</p>
          <p className={s.weatherText}>{measureAmountOfRains(activeWeatherForecast.precip)}</p>
        </div>
        <div className={s.moreWeather}>
          <div className={s.weatherIcon}>
            <div><GlobalSvgSelector id="wind" /></div>
          </div>
          <p className={s.weatherTitle}>Wind</p>
          <p className={s.weatherText}>{Math.round(activeWeatherForecast.windspeed / 3.6)} m/s {getDirection(activeWeatherForecast.winddir).toLowerCase()} - {measurePowerOfWind(Math.round(activeWeatherForecast.windspeed / 3.6))} wind</p>
        </div>
        <div className={s.moreWeather}>
          <div className={s.weatherIcon}>
            <div className={s.temp}><GlobalSvgSelector id="temp" /></div>
          </div>
          <p className={s.weatherTitle}>Temperature</p>
          <p className={s.weatherText}>{activeWeatherForecast.temp}° - feels like {activeWeatherForecast.feelsLike}°</p>
        </div>
      </div>
    </div>
  )
};

export default ThisDayInfo;