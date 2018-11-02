const myHead = document.getElementById('title');
const zipCode = document.getElementById('zipField');
const zipFieldHead = document.getElementById('zipFieldHead');
var request = new XMLHttpRequest();

function getWithZip(){
    zipFieldHead.innerHTML = zipCode.value;
    request.open("GET", 'https://api.openweathermap.org/data/2.5/weather?zip={zipCode.value},{1}&APPID={78005268f12b7d461e73208af08b469d}');
    request.send();
}
