// Jake Zamarripa 9/24/26

const movies = [
    "IT,Horror,9,email@gmail.com",
    "The Shining,Horror,10,email@gmail.com",
    "Pet Sematary,Horror,8,email@gmail.com",
    "The Mist,Horror,7,email@gmail.com",
    "Revival,Horror,6,email@gmail.com",
    "1984,8,email@gmail.com",
    "Scary movie,email@gmail.com"
];

function Movie(title, genre, rating, reviewEmail/*, ID*/) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.reviewEmail = reviewEmail;
    //this.movieID = ID;

    this.getSummary = () => {
        return `${title} is a ${genre} movie with a rating of ${rating}.`;        
    }
    this.isHighlyRated = () => {
        if (rating >= 8) {
            return "True";
        }
    }/* Commenting out unused code? 
    this.getReviewEmail = () => {
        if (reviewEmail) {
            return `${reviewEmail}`;
        } else {
            return "True";
        }
    }
    this.getID = () => {
        return `${ID}`;        
    }*/
}

let moviesArray = [];

movies.forEach((i) => {
    try {
    const movieArray = i.split(",");
    const movieArraySplit = movieArray.map((movie) => movie.trim());

    // Just checking for title, genre, and rating with malformed data only checks if the position exists not if it's valid. The 4th check fixes that issue.
    if (!movieArraySplit[0] || !movieArraySplit[1] || !movieArraySplit[2] || !movieArraySplit[3]) {
        throw new SyntaxError("Incomplete movie data")
    }

    const movieTitle = movieArraySplit[0];
    const movieTheme = movieArraySplit[1];
    const movieScore = movieArraySplit[2];
    const movieEmail = movieArraySplit[3];

    const newMovie = new Movie(movieTitle, movieTheme, movieScore, movieEmail);
    moviesArray.push(newMovie);
    }

    catch (err) {
        console.log(err.message);
    }
});

console.log("List of Movies");
console.log("Title | Genre | Rating | Email | Summary");
moviesArray.forEach((movie) => {
    console.log(`${movie.title} | ${movie.genre} | ${movie.rating} | ${movie.rating} | ${movie.reviewEmail} | ${movie.getSummary()}`);
});

console.log("\n\nList of HIGH RATED Movies")
console.log("Title | Genre | Rating | Email | Summary")
moviesArray.forEach((movie) => {
    if (movie.rating > 7) {
    console.log(`${movie.title} | ${movie.genre} | ${movie.rating} | ${movie.rating} | ${movie.reviewEmail} | ${movie.getSummary()}`);
    }
});

// This will print my favorite movie is The Shining and IT. It grabs the 2nd listed movie in my cleaned array and accesses the title from it's class. 
console.log(`My favorite movie is ${moviesArray[1].title} out of the listed movies. ${moviesArray[0].title} is my 2nd favorite but I enjoy both a lot.`);