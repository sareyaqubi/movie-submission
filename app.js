// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("form", { error: null });
});

app.post("/submit", (req, res) => {
    const movieName = req.body.movie;
    const rating = parseInt(req.body.rating);

    // Validation
    if (!movieName || movieName.trim() === "" || isNaN(rating) || rating < 1 ||  rating > 10) {
        res.render("form", { error: "Please enter a valid movie name and a rating between 1 and 10." });
    } else {
        res.render("success", { movie: movieName, rating: rating });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});