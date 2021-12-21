import React from "react"
import s from './Days.module.scss'
import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import { choiceIcon, computeDay, computeDirectDay, computeTemperature } from "../../../UI";
import { changeActiveWeather } from "../../../../app/slices/currentWeekday";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ day }) => {
  const dispatch = useDispatch()
  const { city } = useSelector(state => state.currentWeather)

  const handleActiveWeather = () => {
    dispatch(changeActiveWeather({
      weekday: computeDay(day.datetime),
      city: city,
      iconId: choiceIcon(day.icon),
      temp: computeTemperature(day.temp),
      feelsLike: computeTemperature(day.feelslike),
      sunrise: day.sunrise,
      sunset: day.sunset,
      pressure: day.pressure,
      precip: day.precip,
      windspeed: day.windspeed,
      winddir: day.winddir
    }))
  }

  return (
    <div className={s.card} onClick={handleActiveWeather}>
      <p className={s.day}>{computeDay(day.datetime)}</p>
      <p className={s.dayInfo}>{computeDirectDay(day.datetime)}</p>
      <div className={s.img}><GlobalSvgSelector id={choiceIcon(day.icon)} /></div>
      <p className={s.day_temp}>{computeTemperature(day.tempmax)}</p>
      <p className={s.night_temp}>{computeTemperature(day.tempmin)}</p>
      <p className={s.info}>{day.conditions}</p>
    </div>
  )
};

export default Card;