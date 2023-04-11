const API_KEY = '4be04baeeb03e204fc1f03424e72c598'

export const URL_CURRENT_WEATHER = (location) => `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
export const URL_WEEKLY_FORECAST = (location) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`