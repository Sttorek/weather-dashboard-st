// DOM VARIABLES --------------------------------------------------
var searchBtn = $("#search-btn");
var searchTermEl = $("#search-term");
var cityName = $("#city-name");
var temp = $("#temp");
var humidity = $("#humidity");
var windSpeed = $("#wind-speed");
var uvIndex = $("#uv-index");

// JAVASCRIPT VARIABLES -------------------------------------------

// FUNCTION DEFINITIONS -------------------------------------------

// EVENT LISTENERS ------------------------------------------------

searchBtn.on("click", function () {
  event.preventDefault();
  var searchTerm = searchTermEl.val();
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchTerm +
    "&appid=bf2c896f347aeadf48d0bd9ae7d3ba10&units=imperial";
  var queryURLTwo =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchTerm +
    "&appid=bf2c896f347aeadf48d0bd9ae7d3ba10&units=imperial";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $(cityName).append(data.name);
      $(temp).text("Tempurature: ");
      $(temp).append(data.main.temp);
      $(humidity).text("Humidity: ");
      $(humidity).append(data.main.humidity);
      $(windSpeed).text("Wind Speed: ");
      $(windSpeed).append(data.wind.speed);
      $(uvIndex).text("UV Index: ");
    });

  fetch(queryURLTwo)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.list);
      $(date1).append(data.list[0].dt);
      $(desc1).append(data.list[0].weather[0].description);
      $(temp1).append(data.list[0].main.temp);
      $(humidity1).append(data.list[0].main.humidity);

      $(date2).append(data.list[1].dt);
      $(desc2).append(data.list[1].weather[0].description);
      $(temp2).append(data.list[1].main.temp);
      $(humidity2).append(data.list[1].main.humidity);

      $(date3).append(data.list[2].dt);
      $(desc3).append(data.list[2].weather[0].description);
      $(temp3).append(data.list[2].main.temp);
      $(humidity3).append(data.list[2].main.humidity);

      $(date4).append(data.list[3].dt);
      $(desc4).append(data.list[3].weather[0].description);
      $(temp4).append(data.list[3].main.temp);
      $(humidity4).append(data.list[3].main.humidity);

      $(date5).append(data.list[4].dt);
      $(desc5).append(data.list[4].weather[0].description);
      $(temp5).append(data.list[4].main.temp);
      $(humidity5).append(data.list[4].main.humidity);
    });
});

// FUNCTION CALLS --------------------------------------------------
