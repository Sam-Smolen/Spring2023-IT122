// importing data from mongoDb movies collection

import mongoose from 'mongoose';
import { connectionString } from '../credentials.js'
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
//const exampleConnectionString = "mongodb+srv://<dbuser>:<dbpassword>@<cluster>.mongodb.net/test?retryWrites=true";

mongoose.connect(connectionString, {
    dbName: 'school_projects_db',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const movieSchema = new Schema({
 title: { type: String, required: true },
 director: String,
 yearReleased: Number,    // must be JS data type
 budget: String,
 boxOffice: String
});

export const Movie = mongoose.model('Movie', movieSchema);
