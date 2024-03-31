import { IconCloud, IconSun, IconCloudFog, IconDroplet, IconUmbrella , IconSnowflake, IconCloudStorm  } from '@tabler/icons-react';
import React, {JSX} from "react";

interface WeatherProps {
    weather: number | 0;
}

export default function Weather({weather}: WeatherProps) {

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


    return (
        <div className={"currentWeather"}>
            {weatherMap.has(weather) && React.cloneElement(weatherMap.get(weather)!.icon, {size: 64})}
            <h2>{weather !== null ? weatherMap.get(weather)?.description : "Couldn't fetch the data"} </h2>
        </div>
    )
}