//setup the server
import express from 'express';
//import * as data from './public/data.js';
import { Movie } from "./models/Movie.js"; // import movie schema 

const app = express();
app.use(express.json()); //Used to parse JSON bodies


// configure path to public folder which will store all static files such as images and stylesheets
//import * as path from 'path';
app.use(express.static('./public'));

// setup view engine, we will be using ejs
app.set('view engine', 'ejs');


// setup different routes
app.get('/', (req,res) => { // pulls movies data from mongo db collection and renders each movie title
    Movie.find({}).lean() 
        .then((movies) => {
            res.render('index', { movies });
        })
        .catch(err => next(err));
});

// sets route to localhost:3000/about
app.get('/about', (req, res) => {
    res.render('about'); // renders views/about.ejs
});

app.get('/movies/:title', (req, res) => {
    //let movies = data.getAll();
    res.end('you clicked on' + " " + `${req.params.title}`);
});

app.get('/details/:title', (req,res,next) => {
    // db query can use request parameters
    Movie.findOne({ title:req.params.title }).lean()
        .then((movie) => {
            res.render('details', {result: movie} );
        })
        .catch(err => next(err));
});


// define 404 handler
//app.use((req,res) => {
    //res.type('text/plain'); 
    //res.status(404);
    //res.send('404 - Oops! page Not found');
//});

// setup server to run on port 3000 (localhost:3000)
app.listen(3000);