class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.dewpoint= document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
    }
  
    paint(weather) {
      this.location.textContent =weather.name;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = Math.floor((weather.main.temp)-273.15) + '°C';
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
      this.feelsLike.textContent = `Feels Like: ${Math.floor((weather.main.feels_like)-273.15)}°C`;
      this.dewpoint.textContent = `Pressure: ${weather.main.pressure}`;
      this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
    }
  }