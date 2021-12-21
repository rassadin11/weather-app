import { configureStore } from '@reduxjs/toolkit';
import currentTab from './slices/currentTab';
import currentWeather from './slices/currentWeatherSlice';
import currentWeekday from './slices/currentWeekday';

export const store = configureStore({
  reducer: {
    currentWeather: currentWeather,
    currentTab: currentTab,
    currentWeekday: currentWeekday
  },
});