import {IconWind} from "@tabler/icons-react";


interface WindProps {
    wind: Number | null
}
export default function Wind({wind}: WindProps) {
    return (
        <div className={"wind"}>
            <IconWind></IconWind>
            <p>{wind !== null ? wind.toString() : "Couldn't fetch data"} km/h</p>
        </div>
    )
}