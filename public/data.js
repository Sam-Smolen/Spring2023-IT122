const movies = [
    {"title": "Psycho", "director": "Alfred Hitchcock", "yearReleased": 1960, "budget": "$806,947", "boxOffice": "$50 million"},
    {"title": "The Exorcist", "director": "William Friedkin", "yearReleased": 1963, "budget": "$12 million", "boxOffice": "$441.3 million"},
    {"title": "The Shining", "director": "Stanley Kubrick", "yearReleased": 1980, "budget": "$19 million", "boxOffice": "$47.3 million"},
    {"title": "Creature From the Black Lagoon", "director": "Jack Arnold", "yearReleased": 1954, "budget": "~$500,000", "boxOffice": "$1.3 million"},
    {"title": "The Blob", "director": "Irvin Yeaworth", "yearReleased": 1958, "budget": "$110,000", "boxOffice": "$4 million"}
];

const getAll = () => {
    return movies;
}

const getItem = (title) => {
    return movies.find((item) => {
        return item.title.toLowerCase() === title.toLowerCase();
    });
};


export { getAll, getItem };