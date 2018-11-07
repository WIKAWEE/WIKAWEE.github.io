const myHead = document.getElementById('title');
const zipCode = document.getElementById('zipField');
const zipFieldHead = document.getElementById('zipFieldHead');
const tempDisp = document.getElementById('tempDisp');
var request = new XMLHttpRequest();
var isGood = true;
const errorField = document.getElementById('error');
var prevZip = 49866;

function getWithZip(){
    zipFieldHead.innerHTML = zipCode.value;
    var zipForGet = parseInt(zipCode.value);
    request.open("get", 'https://api.openweathermap.org/data/2.5/weather?zip='+zipForGet+'&APPID=78005268f12b7d461e73208af08b469d', true);
    request.onload = function(){
        if(request.status != 404){
            errorField.innerHTML = "";
            var data = JSON.parse(this.response);
            var weather = data.weather;
            var norm = weather[0].main;
            weatherDisp.innerHTML = norm;
            if(norm == "Clouds")
                weatherDisp.innerHTML = "Cloudy";
            var main = data.main;
            var temp = main.temp;
            temp = Math.round(10*(((temp-273.15)*9)/5 +32))/10;
            tempDisp.innerHTML = temp;
            var humid = main.humidity;
            humidDisp.innerHTML = humid;
            prevZip = zipForGet;
        }else{
            errorField.innerHTML = "You entered an invalid zip code. This is the weather data for the previous correct zip code entered, "+prevZip;
            isGood = true;
        }
    }
    request.send();
    window.addEventListener('error', function(e) {
        isGood = false;
    }, true);
}
getWithZip();
