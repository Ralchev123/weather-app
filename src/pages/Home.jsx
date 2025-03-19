import WeatherLook from "../components/WeatherPerCity";
import {getWeather} from "../services/api.js"
import { useEffect, useState } from "react";
import { getCordinates } from "../services/api.js";

function Home () {


    const [weather, setWeather] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);    
    

    useEffect(() => {
    const loadWeather = async () => {
        try {
            const SofiaWeather = await getWeather(latitude, longitude);
            console.log("Weather data:", SofiaWeather);
            setWeather(SofiaWeather);
          } catch (err) {
            console.error("Error fetching weather:", err);
          }
        };

        loadWeather();
        
      }, [latitude, longitude]);

      const [searchQuery, setSearchQuery] = useState("");

      const GetValueOfButton = (e) => {
        e.preventDefault();
        const citySearch =  e.target.cityFinder.value
        setSearchQuery(citySearch);
        findTheCoordinates(citySearch);
      }

      const findTheCoordinates = async (cityName) => {
        try {
            const information = await getCordinates(cityName);
            if (!information || information.length === 0) {
                console.error("No data found for the city.");
                return;
            }
            const cityData = information[0];
            setLatitude(cityData.boundingbox[0]);
            setLongitude(cityData.boundingbox[2]);
            console.log("Coordinates are", cityData.boundingbox[0], cityData.boundingbox[2]);
        } catch (error) {
            console.error("Error fetching coordinates:", error);
        }
    };
    


      return  (
      <>
      <form onSubmit={GetValueOfButton}> 
       <input name = "cityFinder" placeholder="Type City..."/> 
       <button type = "submit" className="submit-city">FIND</button>
      </form>
        <WeatherLook data={weather} cityName={searchQuery} />
      
      </>
      )
      

}


export default Home