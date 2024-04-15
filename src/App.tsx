// import {useState, useEffect} from "react";
import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import WeatherDetails from "./components/WeatherDetails";
// import TemperatureCard from "./components/TemperatureCard";
import Header from "./components/Header";
// import { MAIN_URL } from "./utilities/constants";

function App() {

  return (
    <div className="App">
      <main className="mx-auto max-w-screen-md h-fit">
        <Header />
        <SearchInput />
        <WeatherDetails />
        {/* <TemperatureCard /> */}
      </main>
    </div>
  );
}

export default App;
