const config = require('../../common/config/env.config.js');
const mysql = require('mysql2/promise');
const axios = require('axios');

class serie {

    async serieGetOne(serieCode) {
        try {
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const url = config.imdbOneSerieUrl + config.imdbApiKey + '/' + serieCode + '/FullActor,FullCast,Posters,Images,Trailer,Ratings,';
            let imdbResponse = await axios.get(
                url,
                headers
            );

            return Promise.resolve(imdbResponse.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async serieGetAll() {
        try {
            let headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            let imdbResponse = await axios.get(
                config.imdbSerieUrl + config.imdbApiKey,
                headers
            );

            return Promise.resolve(imdbResponse.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async serieInsert(serie) {
        const connection = await mysql.createConnection(config.options);
        try {
            await connection.beginTransaction();
            const query = `INSERT INTO comment (
                commentMovieOrSerieCode,
                commentValue,
                commentStatus
            ) VALUES (
                '` + serie.commentMovieOrSerieCode + `',
                '` + serie.commentValue + `',
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

    async serieGetComment(serieCode) {
        const connection = await mysql.createConnection(config.options);
        try {
            const query = `SELECT * FROM comment WHERE commentMovieOrSerieCode = '` + serieCode + `';`;
            let queryResult = await connection.query(query);
            return Promise.resolve(queryResult[0][0]);
        } catch (error) {
            return Promise.reject(error);
        }
    }
};

module.exports = serie = new serie();
