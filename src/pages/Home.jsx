import WeatherLook from "../components/WeatherPerCity";
import {getWeather} from "../services/api.js"
import { useEffect, useState } from "react";

function Home () {


    const [weather, setWeather] = useState(null);
    

    useEffect(() => {
    const loadWeather = async () => {
        try {
            const SofiaWeather = await getWeather();
            console.log("Weather data:", SofiaWeather);
            setWeather(SofiaWeather);
          } catch (err) {
            console.error("Error fetching weather:", err);
          }
        };

        loadWeather();
        
      }, []);


      return weather ? <WeatherLook data={weather} />
       : <p>Loading...</p>;
}


export default Home