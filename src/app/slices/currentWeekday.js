import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    activeWeatherForecast: {
        weekday: '',
        city: '',
        iconId: '',
        sunrise: '',
        sunset: '',
        temp: 0,
        feelsLike: 0,
        pressure: 0,
        precip: 0,
        windspeed: 0,
        winddir: 0,
    },
}

export const currentWeather = createSlice({
    name: "currentWeather",
    initialState,
    reducers: {
        changeActiveWeather(state, action) {
            state.activeWeatherForecast = action.payload
        },
    }
})

export const { changeActiveWeather } = currentWeather.actions

export default currentWeather.reducer