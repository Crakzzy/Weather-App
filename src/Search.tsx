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
    onCityChange: (lan: number, lon: number, name: string, district: string) => void;
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
        if (result) {
            const city = result[index]
            onCityChange(city.latitude, city.longitude, city.name, city.admin1)
            setInput("")
        }
    }

    return (
        <div className="search">
            <form className="form" onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor="search">
                    <input required autoComplete="off" placeholder="Search for a city" id="search" type="text" onChange={handleInput} value={input}/>
                    <div className="icon">
                        <svg strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="swap-on">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </div>
                </label>
            </form>
            {input.length > 3 && (
                <div className={"results"}>
                    <ul>
                        {result && result.map((city: City, index) => {
                            return (
                                <li key={city.id} onClick={handleCityChange(index)}>
                                    <p>{city.name}, {city.admin1} ({city.country})</p>
                                </li>
                            )
                        })}
                        {!result && (
                            <p>No results found</p>
                        )}
                    </ul>
                </div>
            )}
            {input && input.length < 4 && (
                <div className={"results"}>
                    <p className={"minimalChars"}>Enter at least 4 characters</p>
                </div>
            )}
        </div>
    )
}