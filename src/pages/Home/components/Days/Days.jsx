import React from "react"
import { useSelector } from "react-redux";
import Card from "./Card";
import s from "./Days.module.scss"

const Days = (props) => {
  const { weather } = useSelector((state) => state.currentWeather)
  const { activeTab } = useSelector(state => state.currentTab)

  return (
    <div className={s.days}>
      {weather.days ?
        (activeTab === 0 ? weather.days.filter((day, idx) => idx < 7).map(day => <Card key={day.datetime} day={day} />)
          : weather.days.filter((day, idx) => idx < 14).map(day => <Card key={day.datetime} day={day} />))
        : <p className={s.loading}>Loading...</p>}
    </div >
  )
};

export default Days;