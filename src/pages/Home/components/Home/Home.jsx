import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../../../app/thunks/fetchCurrentWeather";
import Days from "../Days/Days";
import Tabs from "../Days/Tabs";
import ThisDay from "../ThisDay/ThisDay";
import ThisDayInfo from "../ThisDayInfo/ThisDayInfo";
import s from './Home.module.scss'

const Home = (props) => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.currentWeather)

  React.useEffect(() => {
    dispatch(fetchCurrentWeather())
  }, [dispatch])

  return (
    <div>
      {isLoading ? <div className={s.loading}>Loading...</div> : (<div>
        <div className={s.mainLine}>
          <ThisDay />
          <ThisDayInfo />
        </div>
        <Tabs />
        <Days />
      </div>)
      }
    </div >
  )
};

export default Home;