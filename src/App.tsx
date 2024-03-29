import './App.css';
import Temperature from "./Temperature";
import {useEffect, useState} from "react";
import Weather from "./Weather";
import Precipitation from "./Precipitation";
import Wind from "./Wind";

function App() {

    const [currentTemperature, setCurrentTemperature] = useState<Number|null>(null);
    const [currentWeather, setCurrentWeather] = useState<number|0>(0);
    const [currentApparentTemperature, setCurrentApparentTemperature] = useState<Number|null>(null);
    const [currentPrecipitation, setCurrentPrecipitation] = useState<Number|null>(null);
    const [currentWind, setCurrentWind] = useState<Number|null>(null);


    function fetchData() {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=48.9106&longitude=18.1669&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max&timezone=Europe%2FBerlin").then(response => {
            return response.json()
        }).then(data => {
            setCurrentTemperature(data.current.temperature_2m);
            setCurrentWeather(data.current.weather_code);
            setCurrentApparentTemperature(data.current.apparent_temperature)
            setCurrentPrecipitation(data.current.precipitation)
            setCurrentWind(data.current.wind_speed_10m)
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="main">
            <div className={"container"}>
                <Weather weather={currentWeather}></Weather>
                <Temperature temperature={currentTemperature} apparentTemperature={currentApparentTemperature}></Temperature>
                <Precipitation precipitation={currentPrecipitation}></Precipitation>
                <Wind wind={currentWind}></Wind>
            </div>
        </div>
    );
}

export default App;