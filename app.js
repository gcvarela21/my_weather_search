// var citySearch = $("#city-search");
// var cityHistory = $(".city-history");
// var cityArr = [];
// var cityName = $("#city-name");
// var dateToday = $("#date");
// var weatherToday = $("#weather-today");
// var cityTemp = $("#temp");
// var humidity = $("#humidity");
// var windSpeed = $("#wind-speed");
// var UVIndex = $("#UVIndex");
// var fiveDay = $("#fiveDay");
// var mainCol = $(".main-weather");



// search bar


// $("#submit-button").on("click", function(event) {
// });
 


function getWeather() {
    const APIKey = "cdf85afeac2c889cd209181450dfe03d";
    // var cityName = document.getElementById("city-search").value;
   var cityName = "orange";

let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
         method: "GET"
        }).then(function(response){
        console.log(response);

        });
    };

getWeather();
console.log("we searchin");



// function search(event) {
//     event.preventDefault();
    
//     document.querySelector(".main-column").hidden = false;

//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch.val() + "&units=imperial&appid=cdf85afeac2c889cd209181450dfe03d"

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         console.log(queryURL);
//         addHistory(citySearch.val());
//         showWeatherToday(response);
//         weatherWeek(response);
//         UVIndex.removeClass("good mod bad")
//     });
// }


// function addHistory(cityToSave) {
//     cityArr.push(cityToSave);
//     localStorage.setItem("cityHistory", JSON.stringify(cityArr));
//     showHistory();
// }


// function showHistory() {
//     var cityList = JSON.parse(localStorage.getItem("cityHistory"))
//     var div = $("<div>")
//     var button = $("<button>")
//     button.addClass("btn history-btn btn-outline-primary")
//     button.text(cityList[cityList.length - 1]);
//     div.append(button)
//     $(".city-storage").prepend(div);

// }

// $(".history-btn").on("click", function(event) {
//     event.preventDefault();
//     search(event);
// })



