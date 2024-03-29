import "./loader.css";

export default function Loader() {
    return (
        <div className={"loaderContainer"}>
            <div className={"loader"}></div>
            <p>Waiting for user to grant or deny location permissions...</p>
        </div>
    )
}