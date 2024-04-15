import { useState, useEffect } from "react";
import { WEATHER_API_URL } from "../utilities/constants";
import { WeatherData } from "../utilities/types";
import { FaTemperatureFull, FaTemperatureLow } from "react-icons/fa6";

const WeatherDetails = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const WEATHER_DATA_URL =
    WEATHER_API_URL +
    "lat=44.34&lon=10.99&appid=" +
    process.env.WEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(WEATHER_DATA_URL);
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
                      {weatherData.main?.temp.toFixed()} °F
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
                    <div className="flex flex-row">
                      <FaTemperatureFull />
                      <div>
                        &nbsp;Max Temperature:&nbsp;
                        <span className="font-medium">
                          {weatherData.main?.temp_max.toFixed()}&nbsp;°F
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <FaTemperatureLow />
                      <div>
                        &nbsp;Min Temperature:&nbsp;
                        <span className="font-medium">
                          {weatherData.main?.temp_min.toFixed()}&nbsp;°F
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      Pressure:&nbsp;
                      <span className="font-medium">
                        {weatherData.main?.pressure.toFixed()}&nbsp;hPa
                      </span>
                    </div>
                    <div>
                      Humidity:&nbsp;
                      <span className="font-medium">
                        {weatherData.main?.humidity.toFixed()}&nbsp;%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <svg
            width="50%"
            height="50%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50"
              y="50"
              text-anchor="middle"
              alignment-baseline="middle"
              font-size="20"
              font-family="Poppins"
            >
              Loading...
            </text>
          </svg>
        )}
      </div>
    </>
  );
};

export default WeatherDetails;
