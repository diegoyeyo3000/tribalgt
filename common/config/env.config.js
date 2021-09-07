const options = {
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tribalgt',
    dateStrings: true
};

module.exports = {
    port: 3600,
    imdbMovieUrl: "https://imdb-api.com/en/API/Top250Movies/",
    imdbOneMovieUrl: "https://imdb-api.com/en/API/Title/",
    imdbSerieUrl: "https://imdb-api.com/en/API/Top250TVs/",
    imdbOneSerieUrl: "https://imdb-api.com/en/API/Title/",
    imdbApiKey: "k_qmk5835c",
    environment: "dev",
    options
};
