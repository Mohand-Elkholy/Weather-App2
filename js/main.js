let api_key = "742e8e5ce72a4bc497d03532241901"
let city = document.getElementById("city")
let current = document.getElementById("current")
let forecast_1 = document.getElementById("forecast-1")
let forecast_2 = document.getElementById("forecast-2")
let loc = document.getElementById("location")



let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let date = new Date()
let hr = date.getHours()
let min = date.getMinutes()
let day = days[date.getDay()]
let month = months[date.getMonth()]

async function currentweather(c){
    let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${c}&days=3&aqi=yes&alerts=no`)    
    let finall = await res.json()

    let wind_dir = finall.current.wind_dir
    let dir 
    switch (wind_dir) {
        case "W":
            dir= "West"
            break;
        case "E":
            dir= "East"
            break;
        case "N":
            dir= "North"
            break;
        case "S":
            dir= "South"
            break;
        case "NE":
            dir= "Northeas"
            break;
        case "SE":
            dir= "Southeast"
            break;
        case "NW":
            dir= "Northwest "
            break;
        case "SW":
            dir= "Southwest"
            break;
        case "NNE":
            dir= "North-northeast"
            break;
        case "ENE":
            dir= "East-northeast"
            break;
        case "ESE":
            dir= "East-southeast"
            break;
        case "SSE":
            dir= "South-southeast"
            break;
        case "SSW":
            dir= "South-southwest"
            break;
        case "WSW":
            dir= "West-southwest"
            break;
        case "WNW":
            dir= "West-northwest"
            break;
        case "NNW":
            dir= "North-northwest"
            break;
    
        default:
            break;
    }
    let day1
    let day2
    switch (day) {
        case "Sunday":
            day1="Monday"
            day2 = "Tuesday"
            break;
        case "Monday":
            day1="Tuesday"
            day2 = "Wednesday"
            break;
        case "Tuesday":
            day1="Wednesday"
            day2 = "Thursday"
            break;
        case "Wednesday":
            day1="Thursday"
            day2 = "Friday"
            break;
        case "Thursday":
            day1="Friday"
            day2 = "Saturday"
            break;
        case "Friday":
            day1="Saturday"
            day2 = "Sunday"
            break;
        case "Saturday":
            day1="Sunday"
            day2 = "Monday"
            break;
        default:
            break;
    }
    let x = "PM"
    if(hr < 12) x = "AM";
    if(hr == 0) hr = 12 ;
    if(hr > 12) hr = hr -12;
    if(hr< 10) hr = "0" + hr
    if(min<10) min = "0" + min
    current.innerHTML=`
    <div class="time d-flex justify-content-between align-items-center">
                            <div class="day">${day}, ${date.getDate()} ${month}</div>
                            <div class="full-date">${hr}:${min}<span id="am-pm">${x}</div>
                        </div>
                        <div class="temp d-flex justify-content-center align-items-center flex-column">
                            <img src="${finall.current.condition.icon}" alt="" class=" mb-2" style="width: 200px;">
                            <p>${finall.current.condition.text}</p>
                            <p>${finall.current.temp_c}&deg;C</p>
                        </div>
                        <div class="info">
                            <div class="info-1 d-flex justify-content-between align-items-center mt-4">
                                <div class="humidity d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-humidity-100.png" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption d-flex justify-content-center align-items-center flex-column">
                                        <span>${finall.current.humidity} %</span>
                                        <span>Humidity</span>
                                    </div>
                                </div>
                                <div class="wind-speed d-flex justify-content-center align-items-center flex-column ">
                                    <div class="icon">
                                        <img src="./icons8-wind-100.png" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption d-flex justify-content-center align-items-center flex-column">
                                        <span>${finall.current.wind_kph} Kph</span>
                                        <span>WindSpeed</span>
                                    </div>
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-between align-items-center mt-5">
                                <div class="sunrise d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-sunrise-26.png" alt=" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption ">
                                        <span>${finall.forecast.forecastday[0].astro.sunrise}</span>
                                    </div>
                                </div>
                                <div class="sunsset d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-sunset-26.png" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption">
                                        <span>${finall.forecast.forecastday[0].astro.sunset}</span>
                                    </div>
                                </div>
                                <div class="wind-dir d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-direction-30.png" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption">
                                        <span>${dir}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="info-3 mt-5 text-center">
                                <p class="fw-bold">Air Quality</p>
                                <div class="caption d-flex justify-content-between align-items-center">
                                    <div>
                                        <p>Co: ${finall.current.air_quality.co}</p>
                                        <p>NO2: ${finall.current.air_quality.no2}</p>
                                        <p>O3: ${finall.current.air_quality.o3}</p>
                                    </div>
                                    <div>   
                                        <p>SO2: ${finall.current.air_quality.so2}</p>
                                        <p>PM2_5: ${finall.current.air_quality.pm2_5}</p>
                                        <p>PM10: ${finall.current.air_quality.pm10}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    `

    forecast_1.innerHTML=`
    <div class="time d-flex justify-content-between align-items-center">
                            <div class="day">${day1}</div>
                            <div class="full-date">${finall.forecast.forecastday[1].date}</div>
                        </div>
                        <div class="temp d-flex justify-content-center align-items-center flex-column">
                            <img src="${finall.forecast.forecastday[1].day.condition.icon}" alt="" class=" mb-2" style="width: 200px;">
                            <p>${finall.forecast.forecastday[1].day.condition.text}</p>
                            <p><span>Max-temp: </span>${finall.forecast.forecastday[1].day.maxtemp_c}&deg;C </p>
                            <p><span>Min-temp: </span>${finall.forecast.forecastday[1].day.mintemp_c}&deg;C </p>
                        </div>
                        <div class="info">
                            <div class="info-1 d-flex justify-content-between align-items-center mt-3">
                                <div class="sunrise d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-sunrise-26.png" alt=" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption">
                                        <span>${finall.forecast.forecastday[1].astro.sunrise}</span>
                                    </div>
                                </div>
                                <div class="sunsset d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-sunset-26.png" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption">
                                        <span>${finall.forecast.forecastday[1].astro.sunset}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                <div class="time rounded-pill p-1  ">
                                    00:00
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="condition me-3">
                                    <img src="${finall.forecast.forecastday[1].hour[0].condition.icon}" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[1].hour[0].condition.text}</span>
                                </div> 
                                <div class="temp">
                                    <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[1].hour[0].temp_c}</span>
                                </div> 
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                <div class="time rounded-pill p-1  ">
                                    06:00
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="condition me-3">
                                    <img src="${finall.forecast.forecastday[1].hour[6].condition.icon}" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[1].hour[6].condition.text}</span>
                                </div> 
                                <div class="temp">
                                    <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[1].hour[6].temp_c}</span>
                                </div> 
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                <div class="time rounded-pill p-1  ">
                                    12:00
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="condition me-3">
                                    <img src="${finall.forecast.forecastday[1].hour[12].condition.icon}" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[1].hour[12].condition.text}</span>
                                </div> 
                                <div class="temp">
                                    <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[1].hour[12].temp_c}</span>
                                </div> 
                                </div>
                            </div>
                                <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                    <div class="time rounded-pill p-1  ">
                                        18:00
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div class="condition me-3">
                                        <img src="${finall.forecast.forecastday[1].hour[18].condition.icon}" alt="" style="width: 40px;">
                                        <span>${finall.forecast.forecastday[1].hour[18].condition.text}</span>
                                    </div> 
                                    <div class="temp">
                                        <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                        <span>${finall.forecast.forecastday[1].hour[18].temp_c}</span>
                                    </div> 
                                    </div>
                                </div>
                            
    `

    forecast_2.innerHTML=`
    <div class="time d-flex justify-content-between align-items-center">
                            <div class="day">${day2}</div>
                            <div class="full-date">${finall.forecast.forecastday[2].date}</div>
                        </div>
                        <div class="temp d-flex justify-content-center align-items-center flex-column">
                            <img src="${finall.forecast.forecastday[2].day.condition.icon}" alt="" class=" mb-2" style="width: 200px;">
                            <p>${finall.forecast.forecastday[2].day.condition.text}</p>
                            <p><span>Max-temp: </span>${finall.forecast.forecastday[2].day.maxtemp_c}&deg;C </p>
                            <p><span>Min-temp: </span>${finall.forecast.forecastday[2].day.mintemp_c}&deg;C </p>
                        </div>
                        <div class="info">
                            <div class="info-1 d-flex justify-content-between align-items-center mt-3">
                                <div class="sunrise d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-sunrise-26.png" alt=" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption">
                                        <span>${finall.forecast.forecastday[2].astro.sunrise}</span>
                                    </div>
                                </div>
                                <div class="sunsset d-flex justify-content-center align-items-center flex-column">
                                    <div class="icon">
                                        <img src="./icons8-sunset-26.png" alt="" style="width: 40px;">
                                    </div>
                                    <div class="caption">
                                        <span>${finall.forecast.forecastday[2].astro.sunset}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                <div class="time rounded-pill p-1  ">
                                    00:00
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="condition me-3">
                                    <img src="${finall.forecast.forecastday[2].hour[0].condition.icon}" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[2].hour[0].condition.text}</span>
                                </div> 
                                <div class="temp">
                                    <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[2].hour[0].temp_c}</span>
                                </div> 
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                <div class="time rounded-pill p-1  ">
                                    06:00
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="condition me-3">
                                    <img src="${finall.forecast.forecastday[2].hour[6].condition.icon}" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[2].hour[6].condition.text}</span>
                                </div> 
                                <div class="temp">
                                    <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[2].hour[6].temp_c}</span>
                                </div> 
                                </div>
                            </div>
                            <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                <div class="time rounded-pill p-1  ">
                                    12:00
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="condition me-3">
                                    <img src="${finall.forecast.forecastday[2].hour[12].condition.icon}" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[2].hour[12].condition.text}</span>
                                </div> 
                                <div class="temp">
                                    <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                    <span>${finall.forecast.forecastday[2].hour[12].temp_c}</span>
                                </div> 
                                </div>
                            </div>
                                <div class="info-2 d-flex justify-content-center align-items-center flex-column mt-3">
                                    <div class="time rounded-pill p-1  ">
                                        18:00
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center mt-3">
                                    <div class="condition me-3">
                                        <img src="${finall.forecast.forecastday[2].hour[18].condition.icon}" alt="" style="width: 40px;">
                                        <span>${finall.forecast.forecastday[2].hour[18].condition.text}</span>
                                    </div> 
                                    <div class="temp">
                                        <img src="./icons8-temperature-50.png" alt="" style="width: 40px;">
                                        <span>${finall.forecast.forecastday[2].hour[18].temp_c}</span>
                                    </div> 
                                    </div>
                                </div>
                            
    `

    loc.innerHTML=`
            <span>${finall.location.name} - ${finall.location.country} - ${finall.location.tz_id}</span>
    `
}
currentweather("london")

city.addEventListener("input" , function(e){
    currentweather(e.target.value)
})