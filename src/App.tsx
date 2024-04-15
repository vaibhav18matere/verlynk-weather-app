import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import WeatherDetails from "./components/WeatherDetails";
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <main className="mx-auto max-w-screen-md h-fit">
        <Header />
        <SearchInput />
        <WeatherDetails />
      </main>
    </div>
  );
}

export default App;
