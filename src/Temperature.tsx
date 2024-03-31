import {IconTemperature} from "@tabler/icons-react";

interface TemperatureProps {
    temperature: Number | null,
    apparentTemperature: Number | null
}

export default function Temperature({temperature, apparentTemperature}: TemperatureProps) {
    return (
        <div className={"temperature"}>
            <div className={"current"}>
                <IconTemperature></IconTemperature>
                <p>{temperature !== null ? `${temperature.toString()}°C` : "Couldn't fetch the data"} </p>
            </div>
            <div className={"apparent"}>
                <p>Apparent temperature: {apparentTemperature !== null ? `${apparentTemperature.toString()}°C` : "Couldn't fetch the data"} </p>
            </div>
        </div>
    )
}