import cloudsImg from "../assets/clouds.png";
import sunImg from "../assets/sunshine.png"
import "../css/WeatherPerCity.css"


function WeatherLook({ data }) {
    if (!data) return <p>Loading weather...</p>;
    var imsource = undefined;

    if(data.weather[0].main.startsWith("Clou")){
        imsource = cloudsImg
    }

    if(data.weather[0].main.startsWith("Sun")){
      imsource = sunImg
  }
    
  
    return (
        <div className="weather-city">
          <img src ={imsource} alt = "image of weather"/>
          <div className="weather-info">

          <div className="current-temp">
                <h1>SOFIA</h1>
                <h4>CURRENT↓</h4>
                <h1>{data.main.temp}°C</h1> 
          </div>

            <div className="min-max">
              <h3>MIN: {data.main.temp_min}</h3>
              <h3>MAX: {data.main.temp_max}</h3>
          

          </div>
        </div>
      </div>
    );
  }
  
  export default WeatherLook;
  