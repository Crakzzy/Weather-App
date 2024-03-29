import temperatureSvg from "./images/temperature.svg";

interface TemperatureProps {
    temperature: Number | null,
    apparentTemperature: Number | null
}

export default function Temperature({temperature, apparentTemperature}: TemperatureProps) {
    return (
        <div className={"temperature"}>
            <div className={"current"}>
                <img src={temperatureSvg} alt={"temperature"}/>
                <p>{temperature !== null ? `${temperature.toString()}°C` : "Couldn't fetch the data"} </p>
            </div>
            <div className={"apparent"}>
                <p>Apparent temperature: {apparentTemperature !== null ? `${apparentTemperature.toString()}°C` : "Couldn't fetch the data"} </p>
            </div>
        </div>
    )
}