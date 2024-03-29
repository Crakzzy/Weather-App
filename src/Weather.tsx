import sunSvg from "./images/sun.svg";
import partlyCloudySvg from "./images/partlyCloudy.svg";
import cloudSvg from "./images/cloud.svg";
import fogSvg from "./images/fog.svg";
import drizzleSvg from "./images/drizzle.svg";
import rainSvg from "./images/rain.svg";
import snowSvg from "./images/snow.svg";
import thunderstormSvg from "./images/thunderstorm.svg";

interface WeatherProps {
    weather: number | 0;
}

export default function Weather({weather}: WeatherProps) {

    const weatherMap: Map<number, string> = new Map([
        [0, "Clear sky"],
        [1, "Mainly clear"],
        [2, "Partly cloudy"],
        [3, "Overcast"],
        [45, "Fog"],
        [48, "Depositing rime fog"],
        [51, "Drizzle: Light intensity"],
        [52, "Drizzle: Moderate intensity"],
        [53, "Drizzle: Dense intensity"],
        [55, "Drizzle: Dense intensity"],
        [56, "Freezing Drizzle: Light intensity"],
        [57, "Freezing Drizzle: Dense intensity"],
        [61, "Rain: Slight intensity"],
        [62, "Rain: Moderate intensity"],
        [63, "Rain: Heavy intensity"],
        [65, "Rain: Heavy intensity"],
        [66, "Freezing Rain: Light intensity"],
        [67, "Freezing Rain: Heavy intensity"],
        [71, "Snow fall: Slight intensity"],
        [72, "Snow fall: Moderate intensity"],
        [73, "Snow fall: Heavy intensity"],
        [75, "Snow fall: Heavy intensity"],
        [77, "Snow grains"],
        [80, "Rain showers: Slight intensity"],
        [81, "Rain showers: Moderate intensity"],
        [82, "Rain showers: Violent intensity"],
        [85, "Snow showers: Slight intensity"],
        [86, "Snow showers: Heavy intensity"],
        [95, "Thunderstorm: Slight or moderate"],
        [96, "Thunderstorm with slight hail"],
        [99, "Thunderstorm with heavy hail"]
    ]);
    const weatherImageMap: Map<number, string> = new Map([
        [0, sunSvg],
        [1, sunSvg],
        [2, partlyCloudySvg],
        [3, cloudSvg],
        [45, fogSvg],
        [48, fogSvg],
        [51, drizzleSvg],
        [52, drizzleSvg],
        [53, drizzleSvg],
        [55, drizzleSvg],
        [56, drizzleSvg],
        [57, drizzleSvg],
        [61, rainSvg],
        [62, rainSvg],
        [63, rainSvg],
        [65, rainSvg],
        [66, rainSvg],
        [67, rainSvg],
        [71, snowSvg],
        [72, snowSvg],
        [73, snowSvg],
        [75, snowSvg],
        [77, snowSvg],
        [80, rainSvg],
        [81, rainSvg],
        [82, rainSvg],
        [85, rainSvg],
        [86, rainSvg],
        [95, thunderstormSvg],
        [96, thunderstormSvg],
        [99, thunderstormSvg]
    ]);


    return (
        <div className={"currentWeather"}>
            <img src={weatherImageMap.get(weather === null ? 0 : weather)} alt={"Weather"} />
            <h2>{weather !== null ? weatherMap.get(weather) : "Couldn't fetch the data"} </h2>
        </div>
    )
}