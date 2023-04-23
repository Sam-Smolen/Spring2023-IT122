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

exports.delete = (title) => {
    // retain array length for later comparison after array modification
    const oldLength = movies.length;
    movies = movies.filter((item) => {
        return item.title !== title;
    });
    // if old & new array lengths differ, item was deleted
    return {deleted: oldLength !== movies.length, total: movies.length };
};