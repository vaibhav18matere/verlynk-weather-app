import { useState, useEffect } from "react";
// import { MAIN_URL } from "../utilities/constants";
// import { API_KEY } from "../utilities/constants";
import { WeatherData } from "../utilities/types";

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5b0995f5cdb146b3310aac31479e4e39"
        );
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
  }, []);

  return (
    <>
      <div>
        {weatherData !== null ? (
          <section className="flex row-auto shadow-lg mt-6 p-6">
            <div className="flex flex-col items-center justify-center w-screen text-gray-700">
              <div className="w-full max-w-screen-sm bg-white rounded-xl ring-8 ring-white ring-opacity-40">
                <div className="flex place-content-around mb-6">
                  <div className="flex flex-col">
                    <span className="text-6xl font-bold">
                      {weatherData.main.temp.toFixed()} °F
                    </span>
                    <span className="font-semibold mt-1 text-gray-500">
                      Pune, India
                    </span>
                  </div>
                  <svg
                    className="h-24 w-24 fill-current text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
                  </svg>
                </div>
                <div className="flex place-content-around mb-6">
                  <div className="flex flex-col">
                    <p>
                      Max Temperature: {weatherData.main.temp_max.toFixed()} °F
                    </p>
                    <p>
                      Min Temperature: {weatherData.main.temp_min.toFixed()} °F
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      Pressure: {weatherData.main.pressure.toFixed()} hPa
                    </div>
                    <div>Humidity: {weatherData.main.humidity.toFixed()} %</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default WeatherDetails;
