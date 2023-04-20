// testing mongodb connection

import { Movie } from "./models/Movie.js";

// return all records
Movie.find({}).lean()
  .then((movies) => {
    //console.log(movies);
  })
  .catch(err => next(err));

  Movie.findOne({"title": "Psycho" }).lean()
  .then((movie) => {
      console.log(movie);;
  })
  .catch(err => next(err));
