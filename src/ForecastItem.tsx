export default function ForecastItem(props: {
    time: string,
    weather: number,
    maxTemp: number,
    minTemp: number,
    precipitation: number,
    windMax: number
   }) {
    return (
        <div className={"forecastItem"}>
            <div className={"time"}>{props.time}</div>
            <div className={"weather"}>{props.weather}</div>
            <div className={"maxTemp"}>{props.maxTemp}</div>
            <div className={"minTemp"}>{props.minTemp}</div>
            <div className={"precipitation"}>{props.precipitation}</div>
            <div className={"windMax"}>{props.windMax}</div>
        </div>
    )
}