import './App.css';
import Temperature from "./Temperature";
import {useEffect, useState} from "react";
import Weather from "./Weather";
import Precipitation from "./Precipitation";
import Wind from "./Wind";
import Forecast from "./Forecast";
import Search from "./Search";
import Loader from "./Loader";

function App() {

    const [currentTemperature, setCurrentTemperature] = useState<Number | null>(null);
    const [currentWeather, setCurrentWeather] = useState<number | 0>(0);
    const [currentApparentTemperature, setCurrentApparentTemperature] = useState<Number | null>(null);
    const [currentPrecipitation, setCurrentPrecipitation] = useState<Number | null>(null);
    const [currentWind, setCurrentWind] = useState<Number | null>(null);
    const [currentCity, setCurrentCity] = useState<string>("Berlin (Berlin)")
    const [updateForecast, setUpdateForecast] = useState<{ lat: number, lon: number }>()
    const [permissionChosen, setPermissionChosen] = useState(false)

    function fetchData(lat: number, lon: number) {
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

    const handleCityChange = (lat: number, lon: number, name: string, district: string) => {
        fetchData(lat, lon)
        setUpdateForecast({lat: lat, lon: lon})
        setCurrentCity(`${name} (${district})`)
    }

    const reverseCityGeocoding = () => {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${updateForecast?.lat}&longitude=${updateForecast?.lon}&localityLanguage=en`).then(response => {
            return response.json()
        }).then(data => {
            setCurrentCity(`${data.city} (${data.principalSubdivision})`)
        }).catch((error) => {
            setCurrentCity(`Failed to fetch city name`)
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        try {
            navigator.geolocation.getCurrentPosition((position) => {
                    fetchData(position.coords.latitude, position.coords.longitude)
                    setUpdateForecast({lat: position.coords.latitude, lon: position.coords.longitude})
                    reverseCityGeocoding()
                    setPermissionChosen(true)
                }, (error) => {
                    setPermissionChosen(true)
                    fetchData(52.52437, 13.41053);
                }
            )
        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <div className="main" id={"main"}>
            {!permissionChosen && (<Loader></Loader>)}
            {permissionChosen && (<>
                <Search onCityChange={handleCityChange}></Search>
                <h1>{currentCity}</h1>
                <div className={"weatherContainer"}>
                    <Weather weather={currentWeather}></Weather>
                    <Temperature temperature={currentTemperature} apparentTemperature={currentApparentTemperature}></Temperature>
                    <Wind wind={currentWind}></Wind>
                    <Precipitation precipitation={currentPrecipitation}></Precipitation>
                </div>
                <Forecast update={updateForecast}></Forecast>
            </>)}
        </div>
    );
}

export default App;