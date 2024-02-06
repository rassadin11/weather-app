import React from 'react'
import './styles/index.scss'
import Home from './pages/Home/components/Home/Home'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux'
import './App.css'
import CreateRain from './pages/Home/components/Rain'
import Snowfall from 'react-snowfall'

function App() {
  const { isLoading } = useSelector(state => state.currentWeather)
  const { activeWeatherForecast } = useSelector(state => state.currentWeekday)

  return (
    <>
      <div className={isLoading ? `container addScrollBar` : `container`}>
        <Header />
        <div>
          <Home />
        </div>
      </div>
      {(activeWeatherForecast.iconId === 'small_rain_sun' ||
        activeWeatherForecast.iconId === 'rain') && (
          <div id="Rain">
            <CreateRain />
          </div>
        )}
      {activeWeatherForecast.iconId.search(/(snow)/) > -1 && (
        <div
          style={{
            height: '100vh',
            width: '98vw',
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: '-1',
          }}
        >
          <Snowfall snowflakeCount={300} />
        </div>
      )}
      {activeWeatherForecast.iconId === 'sun' && <div className="sunshine"></div>}
    </>
  )
}

export default App
