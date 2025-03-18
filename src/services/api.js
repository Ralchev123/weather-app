export const getWeather = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=42.7&lon=23.31&units=metric&appid=3f825570233cc12388f60dbe2dbc48a7"
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

  
  