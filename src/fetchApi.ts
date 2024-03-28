export default async function getCurrentTemperature() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=48.9106&longitude=18.1669&current=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1")
    return response.json().then(data => {
        return data.current.temperature_2m;
    });
}