import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const api = {
  key: "3689fe381cd3ee6b66865a45be65f804",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    // console.log('Search');
    // console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        //  console.log(result);
        setWeather(result);
      });
  };
  return (
    <div className="App">
      <div class="background">
        <header className="App-header">
          {/*Header */}
          <h1>Weather App</h1>
          {/*Search box */}
          <div>
            <input
              type="text"
              placeholder="search city/town.."
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={searchPressed}>Search</button>
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <p>{weather.name}</p>

              <p>{weather.main.temp}°C</p>

              <div>
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
