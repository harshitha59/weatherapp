var button = document.getElementById('mybutton')
var inputValue = document.getElementById('inputValue')
var cityname = document.getElementById('name')
var description = document.getElementById('desc')
var temperature = document.getElementById('temp')


button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=5c9d06d901f34be2628ac1d9010c70b4')
.then(response => response.json())
.then(data=> {
var nameValue =data['name'];
var descValue =data['weather'][0]['description'];
var tempValue =data['main']['temp'];

cityname.innerHTML = nameValue
description.innerHTML = descValue
var kelvin = tempValue

var value = kelvin-273.15;
var conversion = value.toFixed(2);//2 decimal places

temperature.innerHTML = conversion;
if(conversion < 10){
    document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherapp/snow.png')";
} 
else if(conversion > 10 && conversion <= 15){
     document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherapp/fog.png')";
} 
 if (conversion > 15 && conversion <= 20) {
    document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherapp/cooldrizzle.png')";
}
else if(conversion > 20 && conversion <= 25){
    document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherapp/warm.png')";
     }
if(conversion > 25 && conversion <= 30)
{
    document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherapp/warm.png')";
     
}
else if(conversion > 30){
    document.body.style.backgroundImage = "url('/Users/gadiyaramsaidurgaharshitha/Desktop/weatherapp/veryhotfull.png')";
     }

})
.then(data => console.log(data))

.catch(err=> alert('wrong city name'))

})