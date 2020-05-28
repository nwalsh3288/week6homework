var localStorageCheck = localStorage.getItem("citySearchHistory")
if (localStorageCheck){
    var localStorageParse = JSON.parse(localStorageCheck)
    for (i=0; i<localStorageParse; i++ ) {
    localStorage.setItem("citySearchHistory", JSON.stringify(localStorageCheck[i]));
        // create buttons - use append function to container

    console.log(localStorageParse)
    }
} else {
    var citySearchArray = []
    var citySearchString = JSON.stringify(citySearchArray)
    localStorage.setItem("citySearchHistory", citySearchString)
}




$(".buttonClass").click(function(e){
    e.preventDefault()

 console.log(event);
var citySearchName =  event.target.form[0].value
// console.log(citySearchName)
// // var citySearchName = $("#text").val()   
//     // Local Storage Storage Starts V
    var citySearchResponseArray = JSON.parse(localStorage.getItem("citySearchHistory"))
    citySearchResponseArray.push(citySearchName)
    localStorage.setItem("citySearchHistory", JSON.stringify(citySearchResponseArray));
    // console.log(citySearchName)
    // for every click and load above - we need to create a button
    // find container with $(.slector).append 
    $(".buttonTest").append("<button class= btn-secondary>" + citySearchName + "</button>");

    // API Process Starts V
    var APIKey = "71c64d13a9a44b3f40b1c7f4cccad4d5"
    // var inputValue = $("#text").val()   

    // $("#search").on("click", function(){
    
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchName}&appid=${APIKey}`;
    // Here we run our AJAX call to the OpenWeatherMap API
  
  $.ajax({
    url: queryURL,
    method: "GET"
  })
//     // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
  
//       // Log the queryURL
      console.log(queryURL);
  
//       // Log the resulting object
      console.log(response);


    //   $("#search").on("click", function(){

// //       // adding temperature to each card

   
$(".dateMain").html("<h5>" + response.list[0].dt_txt + "</h5>")
// console.log(response.list[0].dt_txt)

    $(".cityMain").text(response.city.name)
      // F temp conversion
      var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
//       // add F-temp content to html
      $(".tempFmain").text("Temperature (F): " + tempF)
    //   console.log("Temperature (F): " + tempF);
//       // Humidity var
      var humidity = response.list[0].main.humidity
//       console.log(humidity);
//       // humidity append
      $(".humidityMain").text("Humidity: " + humidity)
    //   console.log("humidity:" + humidity)
    //   Wind var
    var wind = response.list[0].wind.speed
    $(".windMain").text("Wind Speed: " + wind)
    // console.log("Wind Speed: " + wind +"mph")

//         var UV = 
// //       console.log(UV);
// //       // humidity append
// //       $(".UV").text("UV: " + UV)   
   
// Day one API
$(".dateOne").html("<h5>" + response.list[9].dt_txt + "</h5>")
// console.log(response.list[9].dt_txt)

      // F temp conversion
      var tempFone = (response.list[9].main.temp - 273.15) * 1.80 + 32;
//       // add F-temp content to html
      $(".tempFone").text("Temperature (F): " + tempF)
    //   console.log("Temperature (F): " + tempF);
//       // Humidity var
      var humidity = response.list[9].main.humidity
//       console.log(humidity);
//       // humidity append
      $(".humidityOne").text("Humidity: " + humidity)
    //   console.log("humidity:" + humidity)
  
// Day two API
$(".dateTwo").html("<h5>" + response.list[17].dt_txt + "</h5>")
// console.log(response.list[17].dt_txt)

      // F temp conversion
      var tempFone = (response.list[17].main.temp - 273.15) * 1.80 + 32;
//       // add F-temp content to html
      $(".tempFtwo").text("Temperature (F): " + tempF)
    //   console.log("Temperature (F): " + tempF);
//       // Humidity var
      var humidity = response.list[17].main.humidity
//       console.log(humidity);
//       // humidity append
      $(".humidityTwo").text("Humidity: " + humidity)
    //   console.log("humidity:" + humidity)

      $(".dateThree").html("<h5>" + response.list[25].dt_txt + "</h5>")
    // console.log(response.list[25].dt_txt)

      // F temp conversion
      var tempFone = (response.list[25].main.temp - 273.15) * 1.80 + 32;
//       // add F-temp content to html
      $(".tempFthree").text("Temperature (F): " + tempF)
    //   console.log("Temperature (F): " + tempF);
//       // Humidity var
      var humidity = response.list[25].main.humidity
//       console.log(humidity);
//       // humidity append
      $(".humidityThree").text("Humidity: " + humidity)
    //   console.log("humidity:" + humidity)


      $(".dateFour").html("<h5>" + response.list[33].dt_txt + "</h5>")
    //   console.log(response.list[33].dt_txt)
  
        // F temp conversion
        var tempFone = (response.list[33].main.temp - 273.15) * 1.80 + 32;
  //       // add F-temp content to html
        $(".tempFfour").text("Temperature (F): " + tempF)
        // console.log("Temperature (F): " + tempF);
  //       // Humidity var
        var humidity = response.list[33].main.humidity
  //       console.log(humidity);
  //       // humidity append
        $(".humidityFour").text("Humidity: " + humidity)
        // console.log("humidity:" + humidity)

        $(".dateFive").html("<h5>" + response.list[39].dt_txt + "</h5>")
        // console.log(response.list[39].dt_txt)
          // F temp conversion
          var tempFone = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    //       // add F-temp content to html
          $(".tempFfive").text("Temperature (F): " + tempF)
        //   console.log("Temperature (F): " + tempF);
    //       // Humidity var
          var humidity = response.list[39].main.humidity
    //       console.log(humidity);
    //       // humidity append
          $(".humidityFive").text("Humidity: " + humidity)
        //   console.log("humidity:" + humidity)


    });

});
