import "./Search.css";
import React, {useState} from "react";

interface City {
    id: number;
    name: string;
    country: string;
    admin1: string; // District
    latitude: number;
    longitude: number;
}

interface SearchBoxProps {
    onCityChange: (lan: number, lon: number) => void;
}

export default function Search({onCityChange}: SearchBoxProps) {

    const [input, setInput] = useState<string>("")
    const [result, setResult] = useState<City[] | null>(null);

    function fetchData() {
        if (input.length < 2) {
            return
        }
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setResult(data.results);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
        fetchData()
    }

    const handleCityChange = (index: number) => () => {
        console.log(result)
        console.log(index)
        if (result) {
            const city = result[index]
            console.log(city.name)
            onCityChange(city.latitude, city.longitude)
        }
    }

    return (
        <div className="search">
            <form className="form">
                <label htmlFor="search">
                    <input required autoComplete="off" placeholder="Search for a city" id="search" type="text" onChange={handleInput}/>
                    <div className="icon">
                        <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-on">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                        <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-off">
                            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </div>
                    <button type="reset" className="close-btn">
                        <svg viewBox="0 0 20 20" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  fillRule="evenodd"></path>
                        </svg>
                    </button>
                </label>
            </form>
            {input && (
                <div className={"results"}>
                    <ul>
                        {result && result.map((city: City, index) => {
                            return (
                                <li key={city.id} onClick={handleCityChange(index)}>
                                    <p>{city.name}, {city.admin1} ({city.country})</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}