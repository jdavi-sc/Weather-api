let city = "Paris";
const apiKey = "fa3e9e1bfb16414ca22210149250111";
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

/**
 * Faz uma requisição à API WeatherAPI para obter a temperatura atual
 * em graus Celsius e Fahrenheit.
 *
 * @author José Davi
 * @param {string} url - http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}
 * @returns {Promise<void>} Retorna uma Promise.
 */

const getWeather = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    const cityName = document.getElementById("city-name");
    const tempC = document.getElementById("temp-c");
    const tempF = document.getElementById("temp-f");

    cityName.textContent = data.location.name;
    tempC.textContent = data.current.temp_c;
    tempF.textContent = data.current.temp_f;
    

  } catch (error) {
    console.error("Erro ao buscar temperatura:", error);
  }
};

getWeather(url);

document.getElementById("update").addEventListener("click", () => getWeather(url));