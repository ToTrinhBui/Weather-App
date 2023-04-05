import React from 'react';
import Current from "./components/Current";
import Detail from "./components/Detail";
import Search from "./components/Search";
import Toggle from "./components/Toggle";
import Weekly from "./components/Weekly";

function App() {
  return (
    <div className="App">
      <div className="switch-button">
        <Toggle />
      </div>
      <div className="container">
        <div className="left">
          <Search />
          <Current />
          <div className="days">
            <Weekly />
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
