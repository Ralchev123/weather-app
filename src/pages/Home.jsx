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

      const [searchQuery, setSearchQuery] = useState("");

      const GetValueOfButton = (e) => {
        e.preventDefault();
        const citySearch = undefined
        setSearchQuery(citySearch);
        console.log("Searched city:", citySearch);

      }


      return  (
      <>
      <form onSubmit={GetValueOfButton}> 
       <input name = "cityFinder" placeholder="Type City..."/> 
       <button type = "submit" className="submit-city">FIND</button>
      </form>
       <WeatherLook data={weather}/>
      
      </>
      )
      

}


export default Home