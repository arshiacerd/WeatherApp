let cityName = document.getElementById("city");
let citytemp = document.getElementById("temp");
let cityHumidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let description = document.getElementById("description");
let icon = document.getElementById("icon");

document.getElementById("searchBar").addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value.length != 0) {
    getApi(e.target.value);
  }
});

async function getApi(val) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=30bcc483bbcbe4345419c6e0ebe6274d`
  );
  const result = await res.json();
  const { name } = result;
  const { temp, humidity } = result.main;
  const { speed } = result.wind;
  cityName.innerHTML = name;
  citytemp.innerHTML = temp;
  cityHumidity.innerHTML = humidity;
  wind.innerHTML = speed;
  description.innerHTML = result.weather[0].description;

  console.log(result);
}
