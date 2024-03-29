import temperatureSvg from "./images/temperature.svg";

interface TemperatureProps {
    temperature: Number | null;
}

export default function Temperature({temperature}: TemperatureProps) {
    return (
        <div className={"temperature"}>
            <img src={temperatureSvg} alt={"temperature"}/>
            <p>{temperature !== null ? `${temperature.toString()}°C` : "Couldn't fetch the data"} </p>
        </div>
    )
}