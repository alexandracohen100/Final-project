 let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];
let h3 = document.querySelector("h3");
h3.innerHTML = `${day}     ${hours}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
  showCity(searchInput.value);
}
let formInput = document.querySelector("#text-box");
formInput.addEventListener("submit", searchCity);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityName=response.data.name;
  let h3=document.querySelector("h3");
  h3.innerHTML=`It is currently ${temperature} degrees Celcius in ${cityName}`;
}
function showCity(cityName) {
  event.preventDefault();
    let apiKey = "c83f0b36646f8f213130092c5eb7cca0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
