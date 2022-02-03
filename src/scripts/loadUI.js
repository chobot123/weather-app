
/**
 * We want to get our weather object and split the data
 * into a readable display
 * @param {data} weatherObj 
 */
const loadWeather = (weatherObj) => {

    const container = document.querySelector(`.container`);

    const loadDate = () => {
        const getDate = document.getElementById("date");
        getDate.innerHTML = weatherObj.date;
    }

    const loadName = () => {

        const getName = document.getElementById("name");
        getName.innerHTML = weatherObj.name;

    }

    const loadFeels = () => {

        const getFeels = document.getElementById("feels");
        getFeels.innerHTML = `Feels like ${Math.round(weatherObj.feels)}&deg;C. ${weatherObj.weather}`;

    }

    const loadTemp = () => {

        const getTemp = document.getElementById("temp");
        getTemp.innerHTML = `${Math.round(weatherObj.temp)}&deg;C`;

    }

    const loadHumidity = () => {

        const getHumidity = document.getElementById("humidity");
        getHumidity.innerHTML = `Humidity: ${weatherObj.humidity}`;

    }

    const loadPressure = () => {
        
        const getPressure = document.getElementById("pressure");
        getPressure.innerHTML = `Pressure: ${weatherObj.pressure}hPa`;

    }

    const loadVisibility = () => {

        const getVisibility = document.getElementById("visibility");
        getVisibility.innerHTML = `Visibility: ${(weatherObj.visibility/1000).toFixed(1)}km`;

    }
    
    const loadWind = () => {

        const getWind = document.getElementById("wind");
        const getWindDir = document.getElementById("direction");
        getWind.innerHTML = `Wind: ${weatherObj.wind.speed}m/s`;
        getWindDir.style.transform = `rotateZ(${weatherObj.wind.degree}deg)`;

    }

    loadDate();
    loadName();
    loadFeels();
    loadTemp();
    loadHumidity();
    loadPressure();
    loadVisibility();
    loadWind();

    //turn on display
    container.classList.remove('inactive');

}

export { loadWeather }