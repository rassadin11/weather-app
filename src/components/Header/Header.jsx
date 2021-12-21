import React from "react"
import s from "./Header.module.scss"
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import Select from 'react-select';
import { ChangeCssRootVariables } from "../../model/ChangeCssRootVariables";
import { storage } from '../../model/Storage'
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather } from "../../app/thunks/fetchCurrentWeather";
import { setCity } from "../../app/slices/currentWeatherSlice";

const Header = (props) => {
  let [theme, setTheme] = React.useState(storage.getItem('theme')) || true

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      background: theme ? "#f4f4f4" : 'rgba(71, 147, 255, 0.2)',
      color: !theme ? "#fff" : '#000',
      width: 195,
      padding: '5px 15px 5px 20px',
      borderRadius: '10px',
      zIndex: 10,
      position: 'relative'
    }),

    option: (styles) => ({
      ...styles,
      padding: '5px 15px 5px 20px',
      color: '#000',
      '&:not(:active) &:hover': {
        background: theme ? "rgba(71, 147, 255, 0.2)" : '#f4f4f4',
      }
    }),

    singleValue: (styles) => ({
      ...styles,
      color: !theme ? "#fff" : '#000',
    }),

    menuList: (styles) => ({
      ...styles,
      color: theme ? "#000" : '#fff',
      background: theme ? "#fff" : 'rgb(79, 79, 79)',
    })
  }

  const { select, city } = useSelector(state => state.currentWeather)
  const dispatch = useDispatch()

  const handleCity = (town) => {
    if (city !== town) {
      dispatch(fetchCurrentWeather(town.value))
      dispatch(setCity(town.value))
    }
  }

  const changeTheme = () => {
    setTheme(!theme)
  }

  React.useEffect(() => {
    ChangeCssRootVariables(theme)
    storage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <GlobalSvgSelector id="logo" />
        <p className={s.title}>React weather</p>
      </div>
      <div className={s.wrapper}>
        <div className={s.change__theme} onClick={changeTheme}><GlobalSvgSelector id="changeTheme" /></div>
        <Select
          defaultValue={select[0]}
          styles={colorStyles}
          options={select}
          onChange={(activeCity) => handleCity(activeCity)}
        />
      </div>
    </div>
  )
};

export default Header;