import { createSlice } from "@reduxjs/toolkit"
import { fetchCurrentWeather } from "../thunks/fetchCurrentWeather"

const initialState = {
    city: 'Saint-Petersburg',
    weather: {},
    isLoading: false,
    select: [
        { value: 'Saint-Petersburg', label: 'Saint-Petersburg' },
        { value: 'Moskow', label: 'Moskow' },
        { value: 'Rostov-on-Done', label: 'Rostov-on-Done' }
    ]
}

export const currentWeather = createSlice({
    name: "currentWeather",
    initialState,
    reducers: {
        setCity(state, action) {
            state.city = action.payload
        }
    },
    extraReducers: {
        [fetchCurrentWeather.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCurrentWeather.fulfilled]: (state, action) => {
            state.isLoading = false
            state.weather = action.payload
        },
    }
})

export const { setCity } = currentWeather.actions

export default currentWeather.reducer