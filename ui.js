const mainSection_div = document.getElementById('main-section');

class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        this.humidity = document.getElementById('w-humidity');
        this.lastUpdated = document.getElementById('w-lastUpdated');
        this.coordinates = document.getElementById('w-coordinates');
    }

    //populate the UI with the result
    paint(weather) {
        //Main content
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.coordinates.textContent = `(Lat: ${weather.coord.lat}, Lon: ${weather.coord.lon})`;
        this.string.textContent = convertTemp(weather.main.temp);
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.desc.textContent = weather.weather[0].description;
        changeBgColor(weather.name);

        //Details
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`;
    }

    //show Alert when an invalid city is selected
    showAlert(message, className) {
        //Create an alert div
        const div = document.createElement('div');
        //add the classes
        div.className = `alert ${ className }`;
        //add the message inside
        div.appendChild(document.createTextNode(message));
        //Insert the div in the DOM
        document.querySelector('.container').insertBefore(div, mainSection_div);
        //Set timeout for 2s
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);
    }
}

//convert temp from K to degree C
function convertTemp(temp) {
    return (temp - 273.15).toFixed(2);
}

//Change background color depending on the weather condition
function changeBgColor(cityName) {
    if(cityName.charAt(0) == 'B' || cityName.charAt(0) == 'K' || cityName.charAt(0) == 'M') {
        mainSection_div.style.backgroundImage = 'linear-gradient(#22c1c3, #fdbb2d)';
    }
    else if(cityName.charAt(0) == 'A' || cityName.charAt(0) == 'L' || cityName.charAt(0) == 'W') {
        mainSection_div.style.backgroundImage = 'linear-gradient(#FC5C7D, #6A82FB)';
    }
    else if(cityName.charAt(0) == 'C' || cityName.charAt(0) == 'G' || cityName.charAt(0) == 'T') {
        mainSection_div.style.backgroundImage = 'linear-gradient(#45B649, #DCE35B)';
    }
    else if(cityName.charAt(0) == 'E' || cityName.charAt(0) == 'H' || cityName.charAt(0) == 'S') {
        mainSection_div.style.backgroundImage = 'linear-gradient(#3fecce, #0f3443)';
    }
    else if(cityName.charAt(0) == 'F' || cityName.charAt(0) == 'I' || cityName.charAt(0) == 'R') {
        mainSection_div.style.backgroundImage = 'linear-gradient(#40E0D0, #FF8C0F)';
    }
    else if(cityName.charAt(0) == 'D' || cityName.charAt(0) == 'J' || cityName.charAt(0) == 'P') {
        mainSection_div.style.backgroundImage = 'linear-gradient(#ff6e7f, #bfe9ff)';
    }
    else {
        mainSection_div.style.backgroundImage = 'linear-gradient(#FFC371, #FF5F6D)';
    }
}
     