import "./loader.css";

export default function Loader() {
    return (
        <div className={"loaderContainer"}>
            <div className={"loader"}></div>
            <p>Waiting for user to grant or deny location permissions...</p>
            <p>Note that the automatic location can be inaccurate</p>
            <p>The accuracy is shown by blue circle on the map</p>
        </div>
    )
}