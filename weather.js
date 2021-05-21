class Weather {
    constructor(city) {
        this.apiKey = '30e096770c452467fdffd74bc77da796';
        this.city = city;
        //this.state = state;
    }

    //Fetch weather from api

    async getWeather () {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city) {
        this.city = city;
        //this.state = state;
    }
}