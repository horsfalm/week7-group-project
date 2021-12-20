APIKey = "6DGYPg9UvcFIG3UCGAZNIx8UCM2TlDcA";


var getAttraction = function() {
    var city = document.getElementById("city").value;
    var queryAttraction = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + APIKey + "&city=" + city;

    fetch(queryAttraction).then(function(queryAttraction) {
    queryAttraction.json().then(function(queryAttraction) {
        console.log(queryAttraction);
        displayAttraction(queryAttraction, city);
        });
    });
}

var displayAttraction = function(city) {
    var attraction = document.createElement("p");
    attraction.id = "attraction";
    attraction.setAttribute("align", "center")
    var attractionName = (city._embedded.events[1].name);
    var attractionDate = (city._embedded.events[1].dates.start.localDate);
    var attractionVenue = (city._embedded.events[1]._embedded.venues[0].name);
    var attractionImg = document.createElement('img');
    attractionImg.src = (city._embedded.events[1].images[1].url);
    $(attraction).append(attractionName, '<br>', attractionDate, '<br>', attractionVenue, '<br>', attractionImg);
    $( '#activity-results' ).append(attraction);
}

document.querySelector('#city').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getAttraction();
    }
});