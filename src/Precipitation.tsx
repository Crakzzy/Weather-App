import {IconDroplet} from "@tabler/icons-react";

interface PrecipitationProps {
    precipitation: Number | null
}

export default function Precipitation({precipitation}: PrecipitationProps) {
    return (
        <div className={"precipitation"}>
            <IconDroplet></IconDroplet>
            <p>Precipitation: {precipitation !== null ? `${precipitation.toString()} ` : "Couldn't fetch the data"}mm</p>
        </div>
    )
}