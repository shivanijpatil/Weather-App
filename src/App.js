import React, { useState, useEffect } from "react";
import "./App.css";

const api = {
  key: "d7735479632d644630db11ed97e61c6d",
  base: "https://api.openweathermap.org/data/2.5/",
};

const cities = [
  { name: "Ho Chi Minh", value: "Ho Chi Minh" },
  { name: "Singapore", value: "Singapore" },
  { name: "Kuala Lumpur", value: "Kuala Lumpur" },
  { name: "Tokyo", value: "Tokyo" },
  { name: "Athens", value: "Athens" },
];

function App() {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("city") || "Ho Chi Minh"
  );
  const [forecastDays, setForecastDays] = useState(3);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather(selectedCity, forecastDays);
  }, [selectedCity, forecastDays]);

  const fetchWeather = async (city, days) => {
    try {
      const response = await fetch(
        `${api.base}forecast?q=${city}&units=metric&appid=${api.key}`
      );
      const data = await response.json();
      const dailyForecast = processForecastData(data.list, days);
      setWeatherData({
        city: data.city.name,
        current: data.list[0],
        forecast: dailyForecast,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const processForecastData = (list, days) => {
    const groupedData = {};
    list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!groupedData[date]) groupedData[date] = [];
      groupedData[date].push(item);
    });

    return Object.entries(groupedData)
      .slice(0, days)
      .map(([date, data]) => {
        const avgTemp =
          data.reduce((sum, entry) => sum + entry.main.temp, 0) / data.length;
        return {
          date,
          avgTemp: avgTemp.toFixed(1),
          description: data[0].weather[0].description,
          condition: data[0].weather[0].main,
        };
      });
  };

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    localStorage.setItem("city", city);
  };

  const handleDaysChange = (event) => {
    setForecastDays(Number(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <label>
          Select City:
          <select value={selectedCity} onChange={handleCityChange}>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Forecast Days:
          <input
            type="number"
            min="1"
            max="6"
            value={forecastDays}
            onChange={handleDaysChange}
          />
        </label>

        {weatherData && (
          <div className="weather-info">
            <h3>{forecastDays}-Day Forecast</h3>
            <div className="forecast">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="forecast-card">
                  <p>
                    <strong>Date:</strong> {day.date}
                  </p>
                  <p>
                    <strong>Avg Temp:</strong> {day.avgTemp}°C
                  </p>
                  <p>
                    <strong>Condition:</strong> {day.condition}
                  </p>
                  <p>({day.description})</p>
                </div>
              ))}
            </div>


          </div>
        )}
      </header>
    </div>
  );
}

export default App;
