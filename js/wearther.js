const API_KEY = '1ffb21f9c2ed7bdf9c0916dea0447223';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you." );
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);