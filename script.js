$(document).ready(function(){
    $("#searchInput").on("keyup",function(e){
        var cityname = e.target.value;
        const APIKey = "e3cc0860d69c52e4b9d23ba625c40290" ;

        // made a request to the server
        $.ajax({
            url : `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,
        }).done(function(weatherdata){

            console.log(weatherdata);
            $("#profile").html(`
            <div class="container" style="padding:8%;">
            <div class="row">
            <div class="card" style="width: 35rem; alignContent: center">
            <img src=" http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png

            " class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Weather : ${weatherdata.weather[0].description}</h5>
              <p class="card-text">The Temperature at ${weatherdata.name} is = ${weatherdata.main.temp} &#8451 and feels like it is ${weatherdata.main.feels_like} &#8451 </p>
              <a href="https://www.google.com/search?gs_ssp=eJzj4tDP1TewTDYrN2D04syoTEktSkxKTAEAQSYGfw&q=${cityname}" target="_blank" class="btn btn-primary">Learn More About It</a>
            </div>
          </div>
            </div>
           </div> `);
        });
    })
})
