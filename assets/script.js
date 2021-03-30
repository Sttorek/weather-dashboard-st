// DOM VARIABLES --------------------------------------------------
var searchBtn = $("#search-btn")
var searchTermEl = $("#search-term")




// JAVASCRIPT VARIABLES -------------------------------------------





// FUNCTION DEFINITIONS -------------------------------------------





// EVENT LISTENERS ------------------------------------------------

searchBtn.on("click", function() {
    event.preventDefault();
    var searchTerm = searchTermEl.val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=bf2c896f347aeadf48d0bd9ae7d3ba10"

    

    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })


});




// FUNCTION CALLS --------------------------------------------------