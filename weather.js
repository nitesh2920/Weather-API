const weatherApi={
    key:"587334176dd686fe602c5f6567ff0e27",
    baseurl:"https://api.openweathermap.org/data/2.5/weather",
}
const  searchInputBox=document.getElementById('inputbox');

 searchInputBox.addEventListener('keypress',(event) =>{

    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
});



//Get Weather Report

function getWeatherReport() {
    fetch(`${weatherApi.baseurl}?q=${searchInputBox.value}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}



//Show weather Report
function showWeatherReport(weather){
    console.log(weather);


    let city=document.getElementById('city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;
    
    let temp=document.getElementById('temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let minmax=document.getElementById('min-max');
    minmax.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;c (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date =document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('cloudy.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('Haze.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('Rainy.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('thunderstorm.jpg')";
        
    } 
}


//Date Manage

function dateManage(date){
     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

     let year=date.getFullYear();
     
     let Month=months[date.getMonth()];

     let dates=date.getDate();

     let day=days[date.getDay()];

     return `${dates} ${Month} (${day}), ${year}`;
}