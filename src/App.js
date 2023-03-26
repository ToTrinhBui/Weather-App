import Current from "./components/Current";
import Detail from "./components/Detail";
import NextDay from "./components/NextDay";
import Search from "./components/Search";
import React from 'react';
import Toggle from "./components/Toggle";
import { ThemeContext } from "./theme/ThemeProvider";


function App() {
  const {theme} = React.useContext(ThemeContext)
  return (
    <div className="App">
      <div className="switch-button">
        <span>{theme}</span>
        <Toggle />
      </div>
      <div className="container">
        <div className="left">
          <Search />
          <Current />
          <div className="days">
            <NextDay />
            <NextDay />
            <NextDay />
            <NextDay />
            <NextDay />
            <NextDay />
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
