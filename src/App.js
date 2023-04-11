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
  const [today, setToday] = useState([])
  const [weekly, setWeekly] = useState([])

  useEffect(() => {
    if (!searchInput) {
      axios.get(URL_CURRENT_WEATHER('Hanoi'))
        .then(response => {
          // console.log(response.data)
          setToday(response.data)
        })
        .catch(error => console.error(error));
      axios.get(URL_WEEKLY_FORECAST('Hanoi'))
        .then(response => {
          // console.log(response.data)
          setWeekly(response.data)
        })
        .catch(error => console.error(error));
    }

  }, [searchInput]);

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.get(URL_CURRENT_WEATHER(searchInput))
      .then(response => {
        // console.log(response.data)
        setToday(response.data)
      })
      .catch(error => console.error(error));
    axios.get(URL_WEEKLY_FORECAST(searchInput))
      .then(response => {
        // console.log(response.data)
        setWeekly(response.data)
      })
      .catch(error => console.error(error));
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
          <Current data={today} />
          <div className="days">
            <Weekly data={weekly} />
            <Weekly />
            <Weekly />
            <Weekly />
            <Weekly />
            <Weekly />
          </div>
        </div>
        <div className="right">
          <Detail />
        </div>
      </div>
    </div>
  );
}

export default App;
