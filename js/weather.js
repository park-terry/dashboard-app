const API_KEY = "7967f65cd902c35c77a130c779790554";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector(".locate span:first-child");
      const weather = document.querySelector(".locate span:last-child");
      const name = data.name;
      const weatherDesc = data.weather[0].main;
      const temp = Math.round(data.main.temp);
      const tempMin = Math.round(data.main.temp_min);
      const tempMax = Math.round(data.main.temp_max);
      city.innerText = name;
      weather.innerText = `${temp}° ${weatherDesc} H: ${tempMax}° L: ${tempMin}°`;
    })
  );
}

function onGeoFail() {
  alert("ERROR: Location can't be found.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
