import logo from './logo.svg';
import './App.css';
import { GeolocationControl, Map, YMaps } from "react-yandex-maps";

function App() {
  return (
      <YMaps query={{apikey: '8b29a2bb-5ff5-4ffb-acb6-5596a63f42d3'}}>
        <Map width={1000} height={1000}  defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}>
            <GeolocationControl/>
        </Map>
      </YMaps>
  );
}

export default App;
