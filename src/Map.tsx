import {Circle, MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from './images/icon.svg'

interface MapsProps {
    lat: number | undefined;
    lon: number | undefined;
    accuracy: number | undefined;
    zoom: number;
}

export default function Map({lat, lon, accuracy, zoom}: MapsProps) {

    const locationIcon = new L.Icon({
            iconUrl: icon,
            iconSize: [48, 48],
            iconAnchor: [24, 48]
        }
    )

    function ChangeView({lat, lon, zoom}: MapsProps) {
        const map = useMap();
        if (lat !== undefined && lon !== undefined) {
            map.flyTo([lat, lon], zoom);
        }
        return null;
    }

    return (
        <MapContainer center={[lat ? lat : 52.52437, lon ? lon : 13.4105]} zoom={13} style={{height: '50%', width: '50%'}}>
            <ChangeView lat={lat} lon={lon} zoom={zoom} accuracy={accuracy}/>
            {accuracy !== undefined && (
                <Circle center={[lat ? lat : 52.52437, lon ? lon : 13.4105]} radius={accuracy}></Circle>
            )}
            {accuracy === undefined && (
                <Marker position={[lat ? lat : 52.52437, lon ? lon : 13.4105]} icon={locationIcon}>
                    <Popup>
                        <span>Current location</span>
                    </Popup>
                </Marker>
            )}
            <TileLayer
                detectRetina={true}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>
    );
}
