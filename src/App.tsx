import './App.css';
import {useEffect, useState} from "react";
import getCurrentTemperature from "./fetchApi";

function App() {

    const [currentTemperature, setCurrentTemperature] = useState(null);

    useEffect(() => {
        getCurrentTemperature().then(temperature => {
            setCurrentTemperature(temperature);
        });
    }, []);


    return (
        <div>
            <p>{currentTemperature}</p>
        </div>
    );
}

export default App;
