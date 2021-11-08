// function getWeather(){
//     


//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=1cd7e695e2c2eacb0cabf85c2e887eea&units=metric`)
//         .then(function (response){
            
//             console.log(response.data.main.temp);

//             document.getElementById("result").innerText=response.data.main.temp;

//     })

    
    

// }
// const searchbox=document.querySelector(".serach-box");
// searchbox.addEventListener('keypress',setQuery);

// function setQuery(evt){
//     if (evt.keyCode==10){
//         getResults(searchbox.value);
//         console.log(searchbox.value);
//     }
// }
function getResults(){
    const CityName= document.getElementById("CityName").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=1cd7e695e2c2eacb0cabf85c2e887eea&units=metric`)
        .then(weather =>{
            return weather.json();
        }).then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city= document.querySelector(".location .city");
    city.innerText=`${weather.name},${weather.sys.country}`
    let d = new Date();
    let year= d.getFullYear();
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days =["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
    
    let day=days[d.getDay()];
    let date =d.getDate();
    let month =months[d.getMonth()];

    let date1=document.querySelector(".location .date")
    date1.innerText=`${day},${date}, ${month},${year}`;

    let temp=document.querySelector(".current .temp");
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`;
    weather_el=document.querySelector(".current .weather");
    weather_el.innerText=weather.weather[0].main;
    let hilow=document.querySelector(".hi-low");
    hilow.innerText=`${weather.main.temp_min} C / ${weather.main.temp_max}`
}

// function dateBuilder(d){
//     let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
//     let days =["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
    
//     let day=days[d.getDay()];
//     let date =d.getDate();
//     let month =months[d.getMonth()];

//     return`${day}, ${date}, ${month}`;
// }