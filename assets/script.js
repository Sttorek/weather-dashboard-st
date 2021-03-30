// DOM VARIABLES --------------------------------------------------
var searchBtn = $("#search-btn")
var searchTermEl = $("#search-term")
var cityName = $("#city-name")
var temp = $("#temp")
var humidity = $("#humidity")
var windSpeed = $("#wind-speed")
var uvIndex = $("#uv-index")


// JAVASCRIPT VARIABLES -------------------------------------------





// FUNCTION DEFINITIONS -------------------------------------------





// EVENT LISTENERS ------------------------------------------------

searchBtn.on("click", function() {
    event.preventDefault();
    var searchTerm = searchTermEl.val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=bf2c896f347aeadf48d0bd9ae7d3ba10&units=imperial"

    

    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function(data){
        $(cityName).append(data.name)
        $(temp).text("Tempurature: ")
        $(temp).append(data.main.temp)
        $(humidity).text("Humidity: ")
        $(humidity).append(data.main.humidity)
        $(windSpeed).text("Wind Speed: ")
        $(windSpeed).append(data.wind.speed)
        $(uvIndex).text("UV Index: ")

        console.log(data)
    })

   
    

});




// FUNCTION CALLS --------------------------------------------------