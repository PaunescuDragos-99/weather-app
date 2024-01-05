class CurrentWeatherDetails {
    constructor( name, country, weather, temperature, temperatureFeelsLike, humidity, wind) {
        this.name = name;
        this.country = country;
        this.weather = weather;
        this.temp = temperature + ' °C';
        this.tempFeelsLike = temperatureFeelsLike+ ' °C';
        this.humidity = humidity + '%';
        this.wind = wind + ' m/s';
    }
}

export {CurrentWeatherDetails};