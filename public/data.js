const movies = [
    {"title": "Psycho", "director": "Alfred Hitchcock", "yearReleased": 1960},
    {"title": "The Exorcist", "director": "William Friedkin", "yearReleased": 1963},
    {"title": "The Shining", "director": "Stanley Kubrick", "yearReleased": 1980},
    {"title": "Creature From the Black Lagoon", "director": "Jack Arnold", "yearReleased": 1954},
    {"title": "The Blob", "director": "Irvin Yeaworth", "yearReleased": 1958}
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