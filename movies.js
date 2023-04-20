'use strict'
import { Movie } from "./models/Movie.js";

// export MongoDb methods as promise functions
exports.getAll = () => {
    // find all documents 
    console.log('detall')
    return Movie.find({}, (err, result) => {
        console.log(err)
        console.log(result)
        // output error if one occurred
        if (err) {
            console.log(err);
        } else {
            // otherwise output the array of documents
            return result;
        }
    });
};

exports.get = (title) => {
    return movies.find((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
    });
};