import { loadWeather } from './loadUI'

let weatherObj;
let cityName;

/**
 * FACTORY
 * takes the weather data and creates an object with what was fetched
 * @return {
 *      city name
 *      date in local time
 *      temperature
 *      "feels like" temp
 *      humidity
 *      pressure,
 *      weather,
 *      visibility,
 *      wind (degree and speed)
 * }
 */
const weatherFactory = (weatherData) => {
    return {
        name : weatherData.name,
        date : new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 1000) + (weatherData.timezone * 1000)).toLocaleString('en-US'),
        temp : (weatherData.main.temp - 273.15),
        feels : (weatherData.main.feels_like - 273.15),
        humidity : weatherData.main.humidity,
        pressure : weatherData.main.pressure,
        weather : weatherData.weather[0].description,
        visibility : weatherData.visibility,
        wind : {
            degree : (weatherData.wind.deg === 0) ? weatherData.wind.deg : (weatherData.wind.deg + 180),
            speed : weatherData.wind.speed
        }
    }
}

/**
 * ASYNC
 * Fetches the api weather data
 * @returns weatherData
 */
async function getData(name) {

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ef332af25834e34d81f7c3d1513aa100`, {
        mode: 'cors'
    });

        const weatherData = await response.json();
        return weatherData;
    } catch (e) {
        alert("Error 404");
    }
    
}

/**
 * We want to get the data, then create a factory object with
 * said data and return it
 * If there is an error,
 * we want to let the user know that the input was invalid ie city does not exist
 * @param {async function} getData 
 */
async function makeDataObj (getData) {
    try{
        const tempObj = weatherFactory(await getData);
        return tempObj;
    } catch(e){ //IF CITY DOES NOT EXIST, CATCH THE ERROR
        const nameInput = document.getElementById('city-name');
        nameInput.setCustomValidity("The City Does Not Exist! Try Again."); //custom error message
        nameInput.reportValidity();
        nameInput.setCustomValidity("");
    }
}

/**
 * We get the user input of a city name and then we run the fetch API and convert
 * said data into an object for future reference
 * @param {event} e 
 */
async function createWeatherObj(e){

    e.preventDefault();
    const cityForm = document.forms[0];
    const {city_name} = e.target.elements;
    cityName = readableTitle(city_name.value); //get name

    const getWeatherData = await getData(cityName);
    const makeWeatherObj = await makeDataObj(getWeatherData);
    weatherObj = makeWeatherObj;
    loadWeather(await weatherObj);
    cityForm.reset();
    return weatherObj;

}

/**
 * We take the name and if it contains a space (ie Los Angeles),
 * it replaces said space with a '+' to make it readable in the fetch API
 * @param {city_name} name 
 * @returns name
 */
const readableTitle = (name) => {
    if(name.includes(' ')){
        return name.replace(' ', '+');
    }
    else {return name;}
}

// makeDataObj(getData('Los+Angeles')).then(function(result){
//     console.log(result);
// })

export { createWeatherObj }



