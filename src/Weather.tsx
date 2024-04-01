import React from "react";
import {weatherMap} from "./weatherMap";

interface WeatherProps {
    weather: number | 0;
}

export default function Weather({weather}: WeatherProps) {
    return (
        <div className={"currentWeather"}>
            {weatherMap.has(weather) && React.cloneElement(weatherMap.get(weather)!.icon, {size: 64})}
            <h2>{weather !== null ? weatherMap.get(weather)?.description : "Couldn't fetch the data"} </h2>
        </div>
    )
}