const apiKey = "f0c40b21a6b90b241951564a67829096";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searcBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        if (data.weather[0].main == "Cloud") {
            weatherIcon.src = "images/clouds.png"
        }
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        } if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }


    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
}

searcBtn.addEventListener("click", () => { checkWeather(searchBox.value); })

