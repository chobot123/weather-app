import { makeUI } from "./createUI";
import { createWeatherObj } from "./APIFunction";

const init = () => {

    makeUI();

    const form = document.forms[0];
    form.addEventListener("submit", createWeatherObj);

}

export { init }