// Source code by Jeffrey Jing


// Makes an API call to the online movie database with a given input, captures
// the returned values from the API request in JSON format, and displays a 
// poster of the movie based on input.

// The OMDB API only allows us to make queries by title, so my workaround for this
// is to manually collect 100 movies from each category, for which I pasted the top 100
// movies of each category from Rotten Tomatos and then wrote a Java TextParser that 
// created an array output of movies from each category.

let drama = ["Black Panther", "Citizen Kane", "Parasite", "Avengers: Endgame", "Casablanca", "Knives Out", "Lady Bird", "Mission: Impossible - Fallout", "BlacKkKlansman", "The Irishman", "The Godfather", "Moonlight", "All About Eve", "Sunset Boulevard", "Roma", "Wonder Woman", "A Star Is Born", "A Quiet Place", "Rebecca", "His Girl Friday", "Logan", "Portrait of a Lady on Fire", "Dunkirk", "Star Wars: The Last Jedi", "The Shape of Water", "Thor: Ragnarok", "Spotlight", "The Farewell", "Selma", "Rear Window", "Seven Samurai", "La Grande illusion", "Arrival", "The Favourite", "Double Indemnity", "All Quiet on the Western Front", "Marriage Story", "Metropolis", "On the Waterfront", "Gravity", "The Best Years of Our Lives", "Boyhood", "The Maltese Falcon", "Leave No Trace", "12 Years a Slave", "Once Upon a Time In Hollywood", "Argo", "Manchester by the Sea", "La La Land", "Alien", "Call Me by Your Name", "L.A. Confidential", "Shadow of a Doubt", "1917", "War for the Planet of the Apes", "The Florida Project", "Widows", "The Battle of Algiers", "The Godfather, Part II", "Baby Driver", "Never Rarely Sometimes Always", "Spider-Man: Homecoming", "The Bridge on the River Kwai", "Pain and Glory", "Schindler's List", "Shoplifters", "M", "Jaws", "The Dark Knight", "The Babadook", "12 Angry Men", "Brooklyn", "Bicycle Thieves", "Three Billboards Outside Ebbing, Missouri", "Marty", "The Treasure of the Sierra Madre", "Chinatown", "All the King's Men", "Creed", "Hell or High Water", "Blade Runner 2049", "The French Connection", "The Wrestler", "First Man", "Harry Potter and the Deathly Hallows - Part 2", "Battleship Potemkin", "The Hurt Locker", "Dolemite Is My Name", "Uncut Gems", "Hidden Figures", "I, Tonya", "Touch of Evil", "Apocalypse Now", "Kind Hearts and Coronets", "The Lighthouse", "Army of Shadows", "Tokyo Story", "A Streetcar Named Desire", "The Social Network", "Rashomon"];
let horror = ["Us", "Get Out", "The Cabinet of Dr. Caligari", "A Quiet Place", "The Invisible Man", "Nosferatu, a Symphony of Horror", "King Kong", "Psycho", "The Bride of Frankenstein", "The Babadook", "Frankenstein", "The Lighthouse", "It Follows", "Hereditary", "Let the Right One In", "Freaks", "Halloween", "Aliens", "Night of the Living Dead", "The Silence of the Lambs", "Rosemary's Baby", "Eyes Without a Face", "Pan's Labyrinth", "Host", "Repulsion", "Possessor: Uncut", "The Cabin in the Woods", "The Witch", "The Invisible Man", "Don't Look Now", "It", "Relic", "The Friends of Eddie Coyle", "Young Frankenstein", "The Birds", "Ready or Not", "The Vanishing", "Drag Me to Hell", "A Girl Walks Home Alone at Night", "Godzilla", "The Fly", "House of Wax", "Dracula", "Midsommar", "Carrie", "Nosferatu: Phantom der Nacht", "The Evil Dead", "Evil Dead 2: Dead by Dawn", "La Llorona", "The Innocents", "The Loved Ones", "The Fly", "Spontaneous", "Dead of Night", "A Nightmare on Elm Street", "Them!", "The Love Witch", "Harpoon", "Room 237", "Werckmeister Harmonies", "Suspiria", "Re-Animator", "Shaun of the Dead", "Train to Busan", "Invasion of the Body Snatchers", "The Host", "Dawn of the Dead", "It Comes At Night", "Zombieland", "In Fabric", "Don't Breathe", "The Mortuary Collection", "Phantom of the Opera", "The Endless", "What Ever Happened to Baby Jane?", "CAM", "The Wolf Man", "The Thing from Another World", "We Are Still Here", "Upgrade", "Eraserhead", "The Texas Chainsaw Massacre", "Halloween", "The Witches", "Horror of Dracula", "Arachnophobia", "The Mummy", "Dr. Jekyll and Mr. Hyde", "Frankenweenie", "Let Me In", "The Dark and the Wicked", "Frenzy", "Misery", "Kaidan", "Island of Lost Souls", "Color Out of Space", "The Conjuring", "Bone Tomahawk", "Cronos", "Little Shop of Horrors"];
let romance = ["It Happened One Night", "Casablanca", "The Philadelphia Story", "A Night at the Opera", "The Shape of Water", "Singin' in the Rain", "The Big Sick", "An American in Paris", "On the Waterfront", "The Best Years of Our Lives", "The Adventures of Robin Hood", "Call Me by Your Name", "Top Hat", "Marty", "The Lady Eve", "Vertigo", "Carol", "The Red Shoes", "Before Midnight", "The Artist", "The Umbrellas of Cherbourg", "City Lights", "Her", "West Side Story", "Roman Holiday", "Ash Is Purest White", "Beauty and The Beast", "Bringing Up Baby", "The African Queen", "The Lost Weekend", "The Princess Bride", "Annie Hall", "In a Lonely Place", "Only Yesterday", "Gentlemen Prefer Blondes", "Sideways", "Sunrise: A Song of Two Humans", "Miracle on 34th Street", "Gone With the Wind", "Three Colors: Red", "Beauty and the Beast", "God's Own Country", "Children of Paradise", "Saint Frances", "Groundhog Day", "Henry V", "Cold War", "You Can't Take It With You", "Before Sunrise", "Slumdog Millionaire", "Your Name.", "Enough Said", "The Young Girls of Rochefort", "Bull Durham", "Crouching Tiger, Hidden Dragon", "Wings of Desire", "The Apartment", "Border", "Lost In Translation", "Titanic", "Elevator to the Gallows", "Say Anything...", "The Lunchbox", "Masculin Feminin", "Three Colors: Blue", "Atlantics", "A Girl Walks Home Alone at Night", "Sense and Sensibility", "Mrs. Miniver", "The Half of It", "The Hustler", "My Beautiful Laundrette", "Four Weddings and a Funeral", "To Catch a Thief", "Shakespeare in Love", "Midnight in Paris", "Foreign Correspondent", "Manhattan", "Up in the Air", "Daughters of the Dust", "Enchanted", "Gloria Bell", "Dave", "Gilda", "Eternal Sunshine of the Spotless Mind", "The Town", "A Summer's Tale", "Moonstruck", "Before Sunset", "Howards End", "Big Night", "The Crying Game", "The Quiet Man", "The Little Mermaid", "From Here to Eternity", "About a Boy", "Monsoon Wedding", "To All the Boys Ive Loved Before", "Revanche", "Million Dollar Baby"];
let comedy = ["It Happened One Night ", "Modern Times ", "Toy Story 4", "Lady Bird", "BlacKkKlansman", "The Philadelphia Story", "Eighth Grade", "His Girl Friday", "Booksmart", "Coco", "A Night at the Opera", "The Farewell", "Singin' in the Rain", "The Big Sick", "The Kid", "Once Upon a Time In Hollywood", "La La Land", "Zootopia", "Paddington 2", "A Hard Day's Night", "Top Hat", "Up", "Toy Story 2", "Toy Story 3", "Three Billboards Outside Ebbing, Missouri", "The Lady Eve", "Dr. Strangelove Or How I Learned to Stop Worrying and Love the Bomb", "Finding Nemo", "The Thin Man", "The Gold Rush", "Kind Hearts and Coronets", "Sorry to Bother You", "Paterson", "The LEGO Movie", "Ant-Man and the Wasp", "The Disaster Artist", "Toy Story", "Crazy Rich Asians", "Isle of Dogs", "Birdman", "The Artist", "La Dolce Vita", "The Death of Stalin", "Palm Springs", "City Lights", "Shaun the Sheep Movie", "Monty Python and the Holy Grail", "Roman Holiday", "Spy", "Hunt for the Wilderpeople", "The Grand Budapest Hotel", "Bringing Up Baby", "Ratatouille", "The Discreet Charm Of The Bourgeoisie", "The Incredibles", "Annie Hall", "Love & Friendship", "Logan Lucky", "Gentlemen Prefer Blondes", "Tampopo", "Sideways", "The Nice Guys", "Airplane!", "The Lego Batman Movie", "Chicken Run", "Guardians of the Galaxy Vol. 2", "101 Dalmatians", "Moonrise Kingdom", "The Forty-Year-Old Version", "Fighting with My Family", "What We Do In The Shadows", "Paddington", "Playtime", "Don't Think Twice", "The Invisible Man", "Saint Frances", "Blow the Man Down", "The Truman Show", "Anomalisa", "Monsters, Inc.", "Groundhog Day", "To Be or Not to Be", "You Can't Take It With You", "The Player", "Ghostbusters", "Big", "The Muppets", "Enough Said", "Deadpool 2", "The Edge of Seventeen", "Back to the Future", "Bull Durham", "The Rules of the Game", "The Apartment", "Silver Linings Playbook", "Broadcast News", "Lost In Translation", "The Women", "Who Framed Roger Rabbit", "Tangerine"];
let action = ["Black Panther ", "Avengers: Endgame ", "Mission: Impossible - Fallout", "Mad Max: Fury Road", "Spider-Man: Into the Spider-Verse", "Wonder Woman", "Logan", "Coco", "Dunkirk", "Star Wars: The Last Jedi", "Thor: Ragnarok", "Seven Samurai", "Star Wars: Episode VII - The Force Awakens", "Metropolis", "The Adventures of Robin Hood", "Incredibles 2", "Zootopia", "King Kong", "Spider-Man: Far From Home", "War for the Planet of the Apes", "Baby Driver", "Spider-Man: Homecoming", "The Bridge on the River Kwai", "Jaws", "Up", "Shazam!", "The Dark Knight", "The Treasure of the Sierra Madre", "Captain America: Civil War", "Skyfall", "Blade Runner 2049", "The French Connection", "The Jungle Book", "Harry Potter and the Deathly Hallows - Part 2", "The 39 Steps", "Mission: Impossible Rogue Nation", "The Hurt Locker", "Apocalypse Now", "Avengers: Infinity War", "Star Trek", "The LEGO Movie", "Lawrence of Arabia", "Ant-Man and the Wasp", "Moana", "Isle of Dogs", "Guardians of the Galaxy", "Kubo and the Two Strings", "Goldfinger", "Star Wars: Episode IV - A New Hope", "Stagecoach", "Marvel's The Avengers", "Paths of Glory", "WALL-E", "Iron Man", "The Terminator", "Hunt for the Wilderpeople", "The African Queen", "Doctor Strange", "The Princess Bride", "The Taking of Pelham One Two Three", "John Wick: Chapter 3 - Parabellum", "The Peanut Butter Falcon", "Aliens", "Star Wars: Episode V - The Empire Strikes Back", "X-Men: Days of Future Past", "True Grit", "All Is Lost", "Looper", "Casino Royale", "Badlands", "The Lego Batman Movie", "Chicken Run", "Guardians of the Galaxy Vol. 2", "Stalker", "No Country for Old Men", "Dawn Of The Planet Of The Apes", "Captain Marvel", "Sicario", "Ran", "Onward", "Jurassic Park", "Henry V", "A Fistful of Dollars", "The Lord of the Rings: The Two Towers", "Ghostbusters", "Rio Bravo", "Captain America: The Winter Soldier", "The Seventh Seal", "Deadpool 2", "Back to the Future", "The Searchers", "Crouching Tiger, Hidden Dragon", "The Fugitive", "Aguirre, the Wrath of God", "Bullitt", "Annihilation", "The Lion King", "Apollo 13", "Who Framed Roger Rabbit", "Catch Me If You Can"];

function getMovies(input) {
    var url = "http://www.omdbapi.com/?apikey=e19afb39&s=";
    console.log(Math.floor(Math.random(1) * 100));
    var genre;
    var title;
    if (input == "Drama") {
        title = drama[Math.floor(Math.random(1) * 99)];
    } else if (input == "Horror") {
        title = horror[Math.floor(Math.random(1) * 99)];
    } else if (input == "Romance") {
        title = romance[Math.floor(Math.random(1) * 99)];
    } else if (input == "Comedy") {
        title = comedy[Math.floor(Math.random(1) * 99)];
    } else {
        title = action[Math.floor(Math.random(1) * 92)];
    }

    // there are spaces in 
    for (var i = 0; i < title.length; i++) {
        if (title.charAt(i) == ' ') {
            url += "%20";
        } else {
            url += title.charAt(i);
        }
    }

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

        // poster[0] = res.Search[0].Poster; // can change search[0] to search[Math.rand(Search.length)] later        
        var inner = "<div class=\"row\">";

        let poster = [];
        for (var i = 0; i < 3; i++) {        
                inner += "\n    <div class=\"column\"> \n       <img src=\"" + res.Search[i].Poster + "\">\n</div>";
        }

        inner += "</div>";
        console.log(inner);
        //var inner = "<div class=\"row\"> <div class=\"column\"><img src=\"" + poster + "\"> </div>";
        //document.getElementById('poster-container').innerHTML = inner;
        $('#poster-container').append(inner); 
        
    })
    .catch(err => {
        console.error(err);
    });
}