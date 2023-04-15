//setup the server
import express from 'express';
import * as data from './public/data.js';

const app = express();
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies


// configure path to public folder which will store all static files such as images and stylesheets
import * as path from 'path';
app.use(express.static('./public'));

// setup view engine, we will be using ejs
app.set('view engine', 'ejs');


// setup different routes
app.get('/', (req, res) => { // route to root directory (homepage, index)
    let movies = data.getAll(); // get data from movies array in data.js
    //console.log(movies[3].title);
    res.render('index', { movies: data.getAll()}); // renders index.ejs, displays number of movie in movies array dynamically
});

// sets route to localhost:3000/about
app.get('/about', (req, res) => {
    res.render('about'); // renders views/about.ejs
});

app.get('/movies/:title', (req, res) => {
    //let movies = data.getAll();
    res.end('you clicked on' + " " + `${req.params.title}`);
});

app.get('/details/:title', (req, res) => {
    let result = data.getItem(req.params.title);
        res.render('details', {
        title: req.params.title,
        result
        }
    );
});

// setup server to run on port 3000 (localhost:3000)
app.listen(3000);