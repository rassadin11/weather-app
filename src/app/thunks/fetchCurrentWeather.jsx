import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentWeather = createAsyncThunk('currentWeather/fetchCurrentWeather', async (city = 'Saint-Petersburg') => {
    return axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=DS4CZSJ5ZYXZRRMJCGK2VLYPU&contentType=json`)
        .then(response => response.data)
})