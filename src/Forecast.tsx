import ForecastItem from "./ForecastItem";
import {useEffect, useState} from "react";

interface ForecastData {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    wind_speed_10m_max: number[];
}

interface ApiResponse {
    daily: ForecastData;
}

export default function Forecast(props: { update: { lat: number, lon: number } | undefined }) {

    const [data, setData] = useState<ForecastData | null>(null)

    function getForecast(lat: number, lon: number) {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=Europe%2FBerlin&forecast_days=3`)
            .then(response => {
                return response.json()
            })
            .then((data: ApiResponse) => {
                setData(data.daily)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        try {
            navigator.geolocation.getCurrentPosition((position) => {
                    getForecast(position.coords.latitude, position.coords.longitude)
                }, (error) => {
                    getForecast(52.52437, 13.41053);
                }
            )
        } catch (e) {
            console.log(e)
        }
    }, []);

    useEffect(() => {
        if (props.update) {
            getForecast(props.update.lat, props.update.lon);
        }
    }, [props.update]);

    return (
        <div className={"forecastContainer"}>
            {data && (
                <>
                    {data.time.slice(0, 3).map((time, index) => (
                        <ForecastItem
                            key={index}
                            time={time}
                            weather={data.weather_code[index]}
                            maxTemp={data.temperature_2m_max[index]}
                            minTemp={data.temperature_2m_min[index]}
                            precipitation={data.precipitation_sum[index]}
                            windMax={data.wind_speed_10m_max[index]}
                        />
                    ))}
                </>
            )}
        </div>
    )
}