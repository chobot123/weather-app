/**
 * We will make the HTML display that
 * will immediately load on initialization
 */
const makeUI = () => {
    
    const getBody = document.querySelector(`body`);

    const makeTitle = () => {
        
        const title = document.createElement("div");
        title.id="page-title";
        title.innerHTML = `Weather Today &#127783;`;
        return title;

    }

    const makeForm = () => {

        const form = document.createElement("form");
        form.setAttribute("action", "");
        form.setAttribute("method", "get");

        //label
        const getName = document.createElement("label");
        getName.setAttribute("for", "city_name");

        //input
        const nameType = document.createElement("input");
        nameType.setAttribute("type", "text");
        nameType.id = "city-name";
        nameType.setAttribute("name", "city_name");
        nameType.setAttribute("placeholder", "City Name...");
        nameType.required = true;

        //submit button
        const submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.id="get-name";
        submit.innerHTML = `&#128269`;

        //append to form
        form.appendChild(getName);
        form.appendChild(nameType);
        form.appendChild(submit);

        return form;

    }

    const makeBody = () => {

        //body container
        const container = document.createElement("div");
        container.className = "container";

        //header
        const header = document.createElement("div");
        const date = document.createElement("div");
        const cityName = document.createElement("div");
        const feelsLike = document.createElement("div");
        const temp = document.createElement("temp");
        header.className = "header";
        date.id = "date";
        cityName.id = "name";
        feelsLike.id = "feels";
        temp.id = "temp";

        //append to header
        header.appendChild(date);
        header.appendChild(cityName);
        header.appendChild(feelsLike);
        header.appendChild(temp);

        //details
        const details = document.createElement("div");
        const humidity = document.createElement("div");
        const pressure = document.createElement("div");
        const visibility = document.createElement("div");
        const wind = document.createElement("div");
        const windDirection = document.createElement("div");
        details.className = "details-container";
        humidity.id = "humidity";
        pressure.id = "pressure";
        visibility.id = "visibility";
        wind.id = "wind";
        windDirection.id = "direction";
        windDirection.innerHTML = `&#8647;`;
        
        //append wind direction to wind
        wind.appendChild(windDirection);
        
        //append to details
        details.appendChild(humidity);
        details.appendChild(pressure);
        details.appendChild(visibility);
        details.appendChild(wind);

        //append header + details to the container
        container.appendChild(header);
        container.appendChild(details);

        //hide container until there is data to display
        container.classList.add('inactive');
        
        return container;
        
    }

    getBody.appendChild(makeTitle());
    getBody.appendChild(makeForm());
    getBody.appendChild(makeBody());


};

export { makeUI }