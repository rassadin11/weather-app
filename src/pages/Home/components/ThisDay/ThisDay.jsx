import { getHours, getMinutes } from "date-fns";
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeActiveWeather } from "../../../../app/slices/currentWeekday";
import GlobalSvgSelector from "../../../../assets/icons/GlobalSvgSelector";
import { choiceIcon, computeDay, computeTemperature } from "../../../UI";
import s from "./ThisDay.module.scss"

const ThisDay = (props) => {
  const dispatch = useDispatch()
  const { weather, city } = useSelector(state => state.currentWeather)
  const { activeWeatherForecast } = useSelector(state => state.currentWeekday)

  React.useEffect(() => {
    if ((weather.days) && (city)) {
      dispatch(changeActiveWeather({
        weekday: computeDay(weather.days[0].datetime),
        city: city,
        iconId: choiceIcon(weather.days[0].icon),
        temp: computeTemperature(weather.days[0].temp),
        feelsLike: computeTemperature(weather.days[0].feelslike),
        sunrise: weather.days[0].sunrise,
        sunset: weather.days[0].sunset,
        pressure: weather.days[0].pressure,
        precip: weather.days[0].precip,
        windspeed: weather.days[0].windspeed,
        winddir: weather.days[0].winddir
      }))
    }
  }, [weather.days, city, dispatch])

  if (activeWeatherForecast.weekday === '') return (
    <div className={s.leftBar}>

    </div>
  );

  return (
    <div className={s.leftBar}>
      {weather.days && <div>
        <div className={s.icon}><GlobalSvgSelector id={activeWeatherForecast.iconId} /></div>
        <p className={s.temperature}>{activeWeatherForecast.temp}<span>°</span></p>
        <p className={s.timeStamp}>{activeWeatherForecast.weekday}</p>
        <p className={s.time}>Time: {getHours(Date.now()) < 10 ? `0${getHours(Date.now())}` : getHours(Date.now())}:{getMinutes(Date.now()) < 10 ? `0${getMinutes(Date.now())}` : getMinutes(Date.now())}</p>
        <p className={s.city}>City: {activeWeatherForecast.city}</p>
      </div>}
    </div>
  )
};

export default ThisDay;