import './App.css';
import Temperature from "./Temperature";
import {useEffect, useState} from "react";
import Weather from "./Weather";

function App() {

    const [currentTemperature, setCurrentTemperature] = useState<Number|null>(null);
    const [currentWeather, setCurrentWeather] = useState<number|0>(0);


    function fetchData() {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=48.9106&longitude=18.1669&current=temperature_2m,weather_code&timezone=Europe%2FBerlin&forecast_days=1").then(response => {
            return response.json()
        }).then(data => {
            setCurrentTemperature(data.current.temperature_2m);
            setCurrentWeather(data.current.weather_code);
        }).catch((error) => {
            console.error('Error:', error);
        });
        console.log("Data fetched")
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="main">
            <div className={"container"}>
                <Weather weather={currentWeather}></Weather>
                <Temperature temperature={currentTemperature}></Temperature>
            </div>
        </div>
    );
}

export default App;