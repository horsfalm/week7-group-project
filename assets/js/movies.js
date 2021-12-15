// Source code by Jeffrey Jing


// Makes an API call to the online movie database with a given input, captures
// the returned values from the API request in JSON format, and displays a 
// poster of the movie based on input.
function getMovies(input) {
    var url = "http://www.omdbapi.com/?apikey=e19afb39&s=";
    url += input;
    fetch(url, {
        "method": "GET",
        "headers": {}
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
        
        // previous code, will probably delete soon
        // do stuff with res here. res is a json variable of all the data
        //for (var i = 0; i < res.Search.length; i++) {
        //    var inner = '<div>' + res.Search[i].Title + "</div>";
        //    document.getElementById('films').innerHTML += inner;
        //}

        let poster = res.Search[0].Poster; // can change search[0] to search[Math.rand(Search.length)] later
        var inner = "<img src=\"" + poster + "\">"; //"\" width=\"500\" height=\"200\">" + "</div>"; <- attempted to set a size for poster, but it loses resolution.
        document.getElementById('poster-container').innerHTML = inner; 

    })
    .catch(err => {
        console.error(err);
    });
}