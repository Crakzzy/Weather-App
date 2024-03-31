import sunSvg from "./images/sun.svg";
import partlyCloudySvg from "./images/partlyCloudy.svg";
import cloudSvg from "./images/cloud.svg";
import fogSvg from "./images/fog.svg";
import drizzleSvg from "./images/drizzle.svg";
import rainSvg from "./images/rain.svg";
import snowSvg from "./images/snow.svg";
import thunderstormSvg from "./images/thunderstorm.svg";
import downSvg from "./images/down.svg";
import upSvg from "./images/up.svg";
import dropSvg from "./images/drop.svg";
import windSvg from "./images/wind.svg";

export default function ForecastItem(props: {
    time: string,
    weather: number,
    maxTemp: number,
    minTemp: number,
    precipitation: number,
    windMax: number
}) {

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
                        <img src={weatherImageMap.get(props.weather) || ""} alt={weatherMap.get(props.weather) || ""} width={32} height={32}/>
                        <p>{weatherMap.get(props.weather)}</p>
                    </>
                )}
            </div>
            <div className={"maxTemp"}>{props.maxTemp && (
                <>
                    <img src={upSvg} alt={"up"}/>
                    <p>{props.maxTemp} °C</p>
                </>
            )}
            </div>
            <div className={"minTemp"}>{props.minTemp && (
                <>
                    <img src={downSvg} alt={"down"}/>
                    <p>{props.minTemp} °C</p>
                </>
            )}
            </div>
            <div className={"windMax"}>{props.windMax && (
                <>
                    <img src={windSvg} alt={"wind"}/>
                    <p>{props.windMax} km/h</p>
                </>
            )}
            </div>
            <div className={"precipitation"}>{(props.precipitation === 0 || props.precipitation) && (
                <>
                    <img src={dropSvg} alt={"precipitation"}/>
                    <p>{props.precipitation} mm</p>
                </>
            )}
            </div>
        </div>
    )
}