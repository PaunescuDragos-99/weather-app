import { doc } from "prettier";
import { CurrentWeatherDetails } from "./modules/CurrentWeatherDetails";
import { getLocation, getWeatherLocation } from "./modules/getWeatherFromUser";
import { ForecastWeather } from "./modules/ForecastWeather";

const renderPage = (() => {
    getWeatherLocation("Craiova");
    getLocation();
    // imageIcon();
})();


