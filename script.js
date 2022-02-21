const searchBtn = document.querySelector("button");
const searchCity = document.querySelector("#city");
const loadText = document.querySelector("#load");
const weatherBox = document.querySelector("#weather");
const weatherCity = weatherBox.firstElementChild;
const weatherDescription = document.querySelector("#weatherDescription");
const weatherTemperature = weatherBox.lastElementChild;

searchBtn.addEventListener("click", searchWeather);

function searchWeather() {
  const key = "6ac76a6f610d9a5bef79b9f9ca986231";
  const cityName = searchCity.value;

  loadText.style.display = "block";
  weatherBox.style.display = "none";

  if (cityName.trim().length === 0) {
    return alert("Please enter a City Name");
  }
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`
  )
    .then((data) => data.json())
    .then((data) => {
      weatherCity.textContent = data.name.toUpperCase();
      weatherDescription.textContent =
        data.weather[0].description.toUpperCase();
      weatherTemperature.textContent =
        (Number(data.main.temp) * 1.8 + 32).toFixed(2) + "F.";
      loadText.style.display = "none";
      weatherBox.style.display = "block";
    })
    .catch(() => alert("Something went wrong!"));
}
