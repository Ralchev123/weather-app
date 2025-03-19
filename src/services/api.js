export const getWeather = async (latitude, longtitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&units=metric&appid=3f825570233cc12388f60dbe2dbc48a7`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data);
      return data;
    } catch (err) {
      console.error("API fetch error:", err);
    }
  };


  export const getCordinates = async (nameCity) => {
      try{
        const answer = await fetch (`https://geocode.maps.co/search?q=${nameCity}&api_key=67d9e06e1845a338894145yfx0c6220`)

        if (!answer.ok) {
          throw new Error(`HTTP error! Status: ${answer.status}`);
        }

        const information = await answer.json();
        return information;

      } catch (err) {
        console.log("API RESPONSE:", )
      }

  }
  

  
  