import React, { useState, useEffect } from 'react';
import Current from "./components/Current";
import Detail from "./components/Detail";
import Search from "./components/Search";
import Toggle from "./components/Toggle";
import Weekly from "./components/Weekly";
import axios from 'axios';
import { URL_CURRENT_WEATHER, URL_WEEKLY_FORECAST } from './api.js'

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [today, setToday] = useState(null)
  const [weekly, setWeekly] = useState(null)
  const [error, setError] = useState(false)

  async function fetchWeatherData(search) {
    try {
      setError(false)

      const currentWeatherResponse = await axios.get(URL_CURRENT_WEATHER(search))
      setToday(currentWeatherResponse.data)

      const weeklyForecastResponse = await axios.get(URL_WEEKLY_FORECAST(search))
      setWeekly(weeklyForecastResponse.data)

    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  useEffect(() => {
    if (!searchInput) {
      fetchWeatherData('Hanoi')
    }

  }, [searchInput]);

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetchWeatherData(searchInput)
  }

  return (
    <div className="App">
      <div className="switch-button">
        <Toggle />
      </div>
      <div className="container">
        <div className="left">
          <Search
            value={searchInput}
            submit={handleSubmit}
            change={handleChange}
          />
          {today && <Current data={today} error={error} />}
          {!error &&
            <div className="days">
              {weekly && <Weekly data={weekly} error={error} />}
            </div>
          }
        </div>
        <div className="right">
          {today && <Detail data={today} error={error} />}
        </div>
      </div>
    </div>
  );
}

export default App;
