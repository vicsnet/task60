const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather_details");
// let city = "lagos";

const getWeather = async (city) => {
  weather.innerHTML = `<h2> Loading... <h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data)
  return showWeather(data);
};

const showWeather = (data) => {
  // console.log(data)
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`;
    return;
  }
  var now = new Date();
  var hours = now.getHours();
  var ft = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    //   hour12: true,
  });

  weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
        <h2>${search.value}</h2>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
            <h2> ${ft}</h2>
            </div>
    `;

  if (hours > 17 && hours < 24) {
    document.getElementById("main").style.backgroundColor = "black";
  } else if (hours > 12 && hours < 18) {
    document.getElementById("main").style.backgroundColor = "yellow";
  }
  //7-8 day
  else if (hours > 6 && hours < 12) {
    document.getElementById("main").style.backgroundColor = "skyblue";
  }
  //5-6 day
  else if (hours > 1 && hours < 5) {
    document.getElementById("main").style.backgroundColor = "grey";
  }
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});

// getWeather("lagos");
