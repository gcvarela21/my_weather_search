const APIKey = "cdf85afeac2c889cd209181450dfe03d";
function getWeather(cityName) {

let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
         method: "GET"
        }).then(function(response){
        console.log(response);
        });
    };

getWeather("orange");
console.log("we searchin");