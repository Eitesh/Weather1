
const key="fa9870c1ddebc2f2add7d70f7ee3fee0"
const api="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let city=document.querySelector(".input");
let btn=document.querySelector(".btn");
let wheather=document.querySelector(".whet")
let wheather1=document.querySelector(".i1")
let wheather2=document.querySelector(".i2")
let wheather3=document.querySelector(".i3")
let wheather4=document.querySelector(".i4")
const key1="fa9870c1ddebc2f2add7d70f7ee3fee0"
const api1="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
async function check1(city){
    const response = await fetch(api1 +city+ `&appid=${key1}`)
    const data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.city.name
    document.querySelector("#t").innerHTML="Temperature: "+Math.round(data.list[0].main.temp)+"°C"
    document.querySelector("#h").innerHTML="Humidity:"+data.list[0].main.humidity+"%"
    document.querySelector("#ws").innerHTML="Wind speed: "+data.list[0].wind.speed+" km/h"
    document.querySelector(".mtemp").innerHTML="Temperature: "+Math.round(data.list[2].main.temp)+"°C";
    document.querySelector(".mws").innerHTML="Wind speed: "+data.list[2].wind.speed +" km/h";
    document.querySelector(".mh").innerHTML="Humidity: "+data.list[2].main.humidity +" %";
    document.querySelector(".temp2").innerHTML="Temperature: "+Math.round(data.list[10].main.temp)+"°C";
    document.querySelector(".ws2").innerHTML="Wind speed: "+data.list[10].wind.speed +" km/h";
    document.querySelector(".h2").innerHTML="Humidity: "+data.list[10].main.humidity +" %";
    document.querySelector(".temp3").innerHTML="Temperature: "+Math.round(data.list[18].main.temp)+"°C";
    document.querySelector(".ws3").innerHTML="Wind speed: "+data.list[18].wind.speed +" km/h";
    document.querySelector(".h3").innerHTML="Humidity: "+data.list[18].main.humidity +" %";
    document.querySelector(".temp4").innerHTML="Temperature: "+Math.round(data.list[26].main.temp)+"°C";
    document.querySelector(".ws4").innerHTML="Wind speed: "+data.list[26].wind.speed +" km/h";
    document.querySelector(".h4").innerHTML="Humidity: "+data.list[26].main.humidity +" %";
    
    console.log(data.list[0].weather[0].main);
    //for main display
    if(data.list[0].weather[0].main=="Rain")
    {
        wheather.src="rain.png";

    } 
    if(data.list[0].weather[0].main=="Clouds" || data.list[0].weather[0].main=="Cloud")
    {
        wheather.src="cloud.png";
    } 
    else if(data.list[0].weather[0].main=="Clear")
    {
        wheather.src="clear.png";
    } 
    else if(data.list[0].weather[0].main=="Rain")
    {
        wheather.src="rain.png";
    }
    else if(data.list[0].weather[0].main=="Thunderstorm")
    {
        wheather.src="rain.png";
    }
    //for monday
    if(data.list[2].weather[0].main=="Rain")
    {
        wheather1.src="rain.png";

    } 
    if(data.list[2].weather[0].main=="Clouds" || data.list[2].weather[0].main=="Cloud")
    {
        wheather1.src="cloud.png";
    } 
    else if(data.list[2].weather[0].main=="Clear")
    {
        wheather1.src="clear.png";
    } 
    else if(data.list[2].weather[0].main=="Rain")
    {
        wheather1.src="rain.png";
    }
    else if(data.list[2].weather[0].main=="Thunderstorm")
    {
        wheather1.src="rain.png";
    }
    //for tuesday
    if(data.list[10].weather[0].main=="Rain")
    {
        wheather2.src="rain.png";

    } 
    if(data.list[10].weather[0].main=="Clouds" || data.list[10].weather[0].main=="Cloud")
    {
        wheather2.src="cloud.png";
    } 
    else if(data.list[10].weather[0].main=="Clear")
    {
        wheather2.src="clear.png";
    } 
    else if(data.list[10].weather[0].main=="Rain")
    {
        wheather2.src="rain.png";
    }
    else if(data.list[10].weather[0].main=="Thunderstorm")
    {
        wheather2.src="rain.png";
    }
    //for wednesday
    if(data.list[18].weather[0].main=="Rain")
    {
        wheather3.src="rain.png";

    } 
    if(data.list[18].weather[0].main=="Clouds" || data.list[18].weather[0].main=="Cloud")
    {
        wheather3.src="cloud.png";
    } 
    else if(data.list[18].weather[0].main=="Clear")
    {
        wheather3.src="clear.png";
    } 
    else if(data.list[18].weather[0].main=="Rain")
    {
        wheather3.src="rain.png";
    }
    else if(data.list[18].weather[0].main=="Thunderstorm")
    {
        wheather3.src="rain.png";
    }
    //for thusday
    if(data.list[26].weather[0].main=="Rain")
    {
        wheather4.src="rain.png";

    } 
    if(data.list[26].weather[0].main=="Clouds" || data.list[26].weather[0].main=="Cloud")
    {
        wheather4.src="cloud.png";
    } 
    else if(data.list[26].weather[0].main=="Clear")
    {
        wheather4.src="clear.png";
    } 
    else if(data.list[26].weather[0].main=="Rain")
    {
        wheather4.src="rain.png";
    }
    else if(data.list[26].weather[0].main=="Thunderstorm")
    {
        wheather4.src="rain.png";
    }

}
btn.addEventListener("click",(e)=>{ 
    e.preventDefault()
    
    
    //check(city.value)
    check1(city.value);
    

})

