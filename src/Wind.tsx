import windSvg from "./images/wind.svg";

interface WindProps {
    wind: Number | null
}
export default function Wind({wind}: WindProps) {
    return (
        <div className={"wind"}>
            <img src={windSvg} alt={"Wind"} />
            <p>{wind !== null ? wind.toString() : "Couldn't fetch data"} km/h</p>
        </div>
    )
}