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
        [0, "./images/sun.svg"],
        [1, "./images/sun.svg"],
        [2, "./images/partly-cloudy.svg"],
        [3, "./images/cloud.svg"],
        [45, "./images/fog.svg"],
        [48, "./images/fog.svg"],
        [51, "./images/drizzle.svg"],
        [52, "./images/drizzle.svg"],
        [53, "./images/drizzle.svg"],
        [55, "./images/drizzle.svg"],
        [56, "./images/drizzle.svg"],
        [57, "./images/drizzle.svg"],
        [61, "./images/rain.svg"],
        [62, "./images/rain.svg"],
        [63, "./images/rain.svg"],
        [65, "./images/rain.svg"],
        [66, "./images/rain.svg"],
        [67, "./images/rain.svg"],
        [71, "./images/snow.svg"],
        [72, "./images/snow.svg"],
        [73, "./images/snow.svg"],
        [75, "./images/snow.svg"],
        [77, "./images/snow.svg"],
        [80, "./images/rain.svg"],
        [81, "./images/rain.svg"],
        [82, "./images/rain.svg"],
        [85, "./images/rain.svg"],
        [86, "./images/rain.svg"],
        [95, "./images/thunderstorm.svg"],
        [96, "./images/thunderstorm.svg"],
        [99, "./images/thunderstorm.svg"]
    ]);

    return (
        <div className={"weather"}>
            <img src={require(`${weatherImageMap.get(weather === null ? 0 : weather)}`)} alt={"Weather"}/>
            <p>{weather !== null ? weatherMap.get(weather) : "Couldn't fetch the data"} </p>
        </div>
    )
}