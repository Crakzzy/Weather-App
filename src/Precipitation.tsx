import precipitationSvg from "./images/rain2.svg";
interface PrecipitationProps {
    precipitation: Number | null
}

export default function Precipitation({precipitation}: PrecipitationProps) {
    return (
        <div className={"precipitation"}>
            <img src={precipitationSvg} alt={"Precipitation"}/>
            <p>Precipitation: {precipitation !== null ? `${precipitation.toString()} ` : "Couldn't fetch the data"}mm</p>
        </div>
    )
}