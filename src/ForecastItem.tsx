import {weatherMap} from "./weatherMap";
import React from "react";
import {IconArrowDown, IconArrowUp, IconDroplet, IconWind} from "@tabler/icons-react";

export default function ForecastItem(props: {
    time: string,
    weather: number,
    maxTemp: number,
    minTemp: number,
    precipitation: number,
    windMax: number
}) {
    function getDay(dataDate: string): string {
        const currentDate = new Date()
        const tomorrow = new Date(currentDate)
        tomorrow.setDate(currentDate.getDate() + 1)

        const currentDateString = currentDate.toISOString().slice(0, 10)
        const tomorrowString = tomorrow.toISOString().slice(0, 10)

        if (dataDate === tomorrowString) {
            return "Tomorrow"
        }
        if (dataDate === currentDateString) {
            return "Today"
        }
        return dataDate.slice(5);
    }


    return (
        <div className={"forecastItem"}>
            <div className={"time"}><h2>{props.time && getDay(props.time)}</h2></div>
            <div className={"weather"}>
                {props.weather && (
                    <>
                        {weatherMap.has(props.weather) && React.cloneElement(weatherMap.get(props.weather)!.icon, {size: 32})}
                        <p>{weatherMap.get(props.weather)?.description}</p>
                    </>
                )}
            </div>
            <div className={"maxTemp"}>{props.maxTemp && (
                <>
                    <IconArrowUp width={32} height={32} color={"#ff0000"}></IconArrowUp>
                    <p>{props.maxTemp} °C</p>
                </>
            )}
            </div>
            <div className={"minTemp"}>{props.minTemp && (
                <>
                    <IconArrowDown width={32} height={32} color={"#0000ff"}></IconArrowDown>
                    <p>{props.minTemp} °C</p>
                </>
            )}
            </div>
            <div className={"windMax"}>{props.windMax && (
                <>
                    <IconWind width={32} height={32}></IconWind>
                    <p>{props.windMax} km/h</p>
                </>
            )}
            </div>
            <div className={"precipitation"}>{(props.precipitation === 0 || props.precipitation) && (
                <>
                    <IconDroplet width={32} height={32}></IconDroplet>
                    <p>{props.precipitation} mm</p>
                </>
            )}
            </div>
        </div>
    )
}