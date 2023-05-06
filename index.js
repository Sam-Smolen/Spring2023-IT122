//setup the server
import express from 'express';
//import * as data from './public/data.js';
import { Movie } from "./models/Movie.js"; // import movie schema 

const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded());


// configure path to public folder which will store all static files such as images and stylesheets
//import * as path from 'path';
app.use(express.static('./public'));

import cors from 'cors';
import { getAll } from './public/data.js';
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

// setup view engine, we will be using ejs
app.set('view engine', 'ejs');


// setup different routes
app.get('/', (req,res) => { // pulls movies data from mongo db collection and renders each movie title
    Movie.find({}).lean() 
        .then((movies) => {
            res.render('react-home', {items: JSON.stringify(movies)});
        })
        .catch(err => next(err));
});

// api routes
app.get('/api/v1/movies', (req, res) => {
    Movie.find({}).lean()
    .then((movies) => {
        res.json(movies);
    })
    .catch(err => {
        res.status(500).send("An Error occured");
    })
});

// pulls info from movies API by movie title
app.get('/api/v1/movies/:title', (req, res) => {
    Movie.findOne({ title: req.params.title }).lean()
        .then((movie) => {
            res.json(movie);
        })
        .catch(err => {
            res.status(500).send("An Error Occured");
        })
});

// posts new movie to DB or updates an existing movie
app.post('/api/v1/add', (req, res, next) => {
    console.log(req.body);
    //res.json(req.body);
    if(!req.body._id) { // inserts new movie
        let movie = new Movie({title: req.body.title, director: req.body.director, yearReleased: req.body.yearReleased, budget: req.body.budget, boxOffice: req.body.boxOffice});
        movie.save();
        res.json({updated: 0, _id: movie._id});
    } else {
        Movie.updateOne({_id: req.body._id}, {title: req.body.title, director: req.body.director, yearReleased: req.body.yearReleased, budget: req.body.budget, boxOffice: req.body.boxOffice})
    .then((movie) => {
        res.json( {result: movie} );
    })
    .catch(err => next(err));
    }

});

// deletes existing movie based on ID
app.delete('/api/v1/delete/:_id', async (req, res) => {
    console.log(req.params._id);
    let result = await Movie.deleteOne({_id: req.params._id});
    res.json({result});
    console.log("done");
 });

 app.delete('/api/v1/deletes/:title', async (req, res) => {
    console.log(req.params.title);
    let result = await Movie.deleteOne({title: req.params.title});
    res.json({result});
    console.log("done");
 });

// route for react home-page
///app.get('/react-home', (req, res) => {
    //Movie.find({}).lean()
    //.then((movies) => {
        //res.render('react-home', {items: JSON.stringify(movies)});
    //});
    
//});

// local routes
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


app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

// setup server to run on port 3000 (localhost:3000)
app.listen(3000);