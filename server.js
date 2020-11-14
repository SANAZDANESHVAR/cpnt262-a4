
// Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

// require gallery module
const animals = require('./nature');

// Create express app and viewing engine
const app = express();
app.set('view engine', 'ejs')

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


// rendering homepage
app.get('/', function (request, response) {
    response.render('pages/index',
        {
            title: " agreen land in  north america",
            tagline: "  green land",

            current: "home"
        })
});

// gallery page render
app.get('/gallery', function (request, response) {
    response.render('pages/gallery',
        {
            title: "Gallery",
            tagline: " Enjoy green land online",

            current: "gallery"
        })

});

// subscribe page render
app.get('/subscribe', function (request, response) {
    response.render('pages/subscribe',
        {
            title: "Subscribe  green gallery",
            tagline: " Stay Informed !",
            current: "subscribe"
        })

});

// Json endpoint for gallery
app.get('/api/gallery', function (request, response) {
    response.json(animals);
});




// Add more middleware
app.use(function (req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 6000;

// Start server
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});
