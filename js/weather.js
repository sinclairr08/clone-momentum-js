const API_KEY = "6bf50a3252735b772871cd61914d0609";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
