const config = require('../../common/config/env.config.js');
const mysql = require('mysql2/promise');
const axios = require('axios');

class Movie {

    async movieGetOne(movieCode) {
        try {
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const url = config.imdbOneMovieUrl + config.imdbApiKey + '/' + movieCode + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,';
            let imdbResponse = await axios.get(
                url,
                headers
            );

            return Promise.resolve(imdbResponse.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async movieGetAll() {
        try {
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let imdbResponse = await axios.get(
                config.imdbMovieUrl + config.imdbApiKey,
                headers
            );

            return Promise.resolve(imdbResponse.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async movieInsert(movie) {
        const connection = await mysql.createConnection(config.options);
        try {
            await connection.beginTransaction();
            const query = `INSERT INTO comment (
                commentMovieOrSerieCode,
                commentValue,
                commentStatus
            ) VALUES (
                '` + movie.commentMovieOrSerieCode + `',
                '` + movie.commentValue + `',
                1
            )`;
            let queryResult = await connection.query(query);
            await connection.commit();
            await connection.end();
            return Promise.resolve(queryResult);
        } catch (error) {
            await connection.rollback();
            await connection.end();
            return Promise.reject(error);
        }
    }

    async movieGetComment(movieCode) {
        const connection = await mysql.createConnection(config.options);
        try {
            const query = `SELECT * FROM comment WHERE commentMovieOrSerieCode = '` + movieCode + `';`;
            let queryResult = await connection.query(query);
            return Promise.resolve(queryResult[0][0]);
        } catch (error) {
            return Promise.reject(error);
        }
    }
};

module.exports = movie = new Movie();
