import {IconCloud, IconCloudFog, IconUmbrella , IconCloudStorm, IconDroplet, IconSnowflake, IconSun, IconArrowUp, IconArrowDown, IconWind} from "@tabler/icons-react";
import React, {JSX} from "react";

export default function ForecastItem(props: {
    time: string,
    weather: number,
    maxTemp: number,
    minTemp: number,
    precipitation: number,
    windMax: number
}) {

    const weatherMap: Map<number, { description: string, icon: JSX.Element }> = new Map([
        [0, {description: "Clear sky", icon: <IconSun/>}],
        [1, {description: "Mainly clear", icon: <IconSun/>}],
        [2, {description: "Partly cloudy", icon: <IconCloud/>}],
        [3, {description: "Overcast", icon: <IconCloud/>}],
        [45, {description: "Fog", icon: <IconCloudFog/>}],
        [48, {description: "Depositing rime fog", icon: <IconCloudFog/>}],
        [51, {description: "Drizzle: Light intensity", icon: <IconDroplet/>}],
        [52, {description: "Drizzle: Moderate intensity", icon: <IconDroplet/>}],
        [53, {description: "Drizzle: Dense intensity", icon: <IconDroplet/>}],
        [55, {description: "Drizzle: Dense intensity", icon: <IconDroplet/>}],
        [56, {description: "Freezing Drizzle: Light intensity", icon: <IconDroplet/>}],
        [57, {description: "Freezing Drizzle: Dense intensity", icon: <IconDroplet/>}],
        [61, {description: "Rain: Slight intensity", icon: <IconUmbrella />}],
        [62, {description: "Rain: Moderate intensity", icon: <IconUmbrella />}],
        [63, {description: "Rain: Heavy intensity", icon: <IconUmbrella />}],
        [65, {description: "Rain: Heavy intensity", icon: <IconUmbrella />}],
        [66, {description: "Freezing Rain: Light intensity", icon: <IconUmbrella />}],
        [67, {description: "Freezing Rain: Heavy intensity", icon: <IconUmbrella />}],
        [71, {description: "Snow fall: Slight intensity", icon: <IconSnowflake/>}],
        [72, {description: "Snow fall: Moderate intensity", icon: <IconSnowflake/>}],
        [73, {description: "Snow fall: Heavy intensity", icon: <IconSnowflake/>}],
        [75, {description: "Snow fall: Heavy intensity", icon: <IconSnowflake/>}],
        [77, {description: "Snow grains", icon: <IconSnowflake/>}],
        [80, {description: "Rain showers: Slight intensity", icon: <IconUmbrella />}],
        [81, {description: "Rain showers: Moderate intensity", icon: <IconUmbrella />}],
        [82, {description: "Rain showers: Violent intensity", icon: <IconUmbrella />}],
        [85, {description: "Snow showers: Slight intensity", icon: <IconUmbrella />}],
        [86, {description: "Snow showers: Heavy intensity", icon: <IconUmbrella />}],
        [95, {description: "Thunderstorm: Slight or moderate", icon: <IconCloudStorm/>}],
        [96, {description: "Thunderstorm with slight hail", icon: <IconCloudStorm/>}],
        [99, {description: "Thunderstorm with heavy hail", icon: <IconCloudStorm/>}]
    ]);

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