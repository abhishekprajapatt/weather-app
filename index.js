const apiKey = "0f36fd6374a86bb4c1a6a707e21f83cf"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data  = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/Mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
