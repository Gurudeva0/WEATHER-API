// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2ca52860ba3ea4c9d6134aa4c5594e0d}


async function getWeatherData(){
    var cityName = document.getElementById('cityName').value
    console.log(cityName)
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b70919f5cd260a5c27127618b39ce875`)
    let res = await data.json()
    console.log(res)

var weatherContainer = document.getElementById('weatherContainer')
weatherContainer.innerHTML = `<div class="row g-0">
<div class="col-md-4">
  <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple49/v4/e6/20/0e/e6200eff-18c9-27de-e23b-d2a5707906c0/pr_source.png/750x750bb.jpeg" class="img-fluid rounded-start" alt="...">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">Weather Data ${cityName} </h5>
  
    <p class="card-text"><small class="text-muted">Temperature:${res.main.temp}</small></p>
    <p class="card-text"><small class="text-muted">Humidity:${res.main.humidity}</small></p>
    <p class="card-text"><small class="text-muted">Windspeed:${res.wind.speed}</small></p>
    <p class="card-text"><small class="text-muted">Pressure:${res.main.pressure}</small></p>
    <p class="card-text"><small class="text-muted">Timezone:${res.timezone}</small></p>
    <p class="card-text"><small class="text-muted">Latitude:${res.coord.lat}</small></p>
    <p class="card-text"><small class="text-muted">Longitude:${res.coord.lon}</small></p>
  </div>
</div>
</div>`
}