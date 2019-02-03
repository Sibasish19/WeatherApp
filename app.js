//Init storage object
const storage = new Storage();

//Set local storage to persist the last selected location
const weatherLocation = storage.getLocationData();

//Init Weather object
const weather = new Weather(weatherLocation.city);
//Init UI object
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    //Get city and country
    const city = document.getElementById('city').value;

    //change location
    weather.changeLocation(city);

    //Set location to local storage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    //Close the modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(data => {
            ui.paint(data);
        })
        .catch(() => {
            //Error message
            ui.showAlert('Please select a valid city!', 'error');
            //Set "" to local storage
            storage.setLocationData("");
        });
}