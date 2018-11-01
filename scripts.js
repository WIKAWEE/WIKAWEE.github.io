const myHead = document.getElementById('title');
const zipCode = document.getElementById('zipField');
const zipFieldHead = document.getElementById('zipFieldHead');
var request = new XMLHttpRequest();

function getWithZip(){
    zipFieldHead.innerHTML = zipCode.value;
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip={zipCode.value},{1}', true);
    request.send();
    var data = JSON.parse(this.response);

    data.forEach(weatherAttrib => {
        console.log(weatheAttrib.title);
    });
}

request.onload = function(){
    
}
