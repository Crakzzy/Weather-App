import './App.css';
import Temperature from "./Temperature";
import {useEffect, useState} from "react";
import Weather from "./Weather";
import Precipitation from "./Precipitation";
import Wind from "./Wind";
import Forecast from "./Forecast";
import Search from "./Search";

function App() {

    const [currentTemperature, setCurrentTemperature] = useState<Number | null>(null);
    const [currentWeather, setCurrentWeather] = useState<number | 0>(0);
    const [currentApparentTemperature, setCurrentApparentTemperature] = useState<Number | null>(null);
    const [currentPrecipitation, setCurrentPrecipitation] = useState<Number | null>(null);
    const [currentWind, setCurrentWind] = useState<Number | null>(null);
    const [updateForecast, setUpdateForecast] = useState<{lat:number, lon:number}>()

    function fetchData(lat: number , lon: number) {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=Europe%2FBerlin&forecast_days=3`).then(response => {
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

    const handleCityChange = (lat: number, lon: number) => {
        fetchData(lat, lon)
        setUpdateForecast({lat: lat, lon: lon})
    }

    useEffect(() => {
        fetchData(52.52437, 13.41053);
    }, []);

    return (
        <div className="main" id={"main"}>
            <Search onCityChange={handleCityChange}></Search>
            <div className={"weatherContainer"}>
                <Weather weather={currentWeather}></Weather>
                <Temperature temperature={currentTemperature} apparentTemperature={currentApparentTemperature}></Temperature>
                <Wind wind={currentWind}></Wind>
                <Precipitation precipitation={currentPrecipitation}></Precipitation>
            </div>
            <Forecast update={updateForecast}></Forecast>
        </div>
    );
}

export default App;