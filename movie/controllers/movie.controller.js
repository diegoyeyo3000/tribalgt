const movieModel = require('../models/movie.model');

exports.getAll = async (req, res) => {
    try {
        const movieResponse = await movieModel.movieGetAll();
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: movieResponse
        }));
    } catch (error) {
        return Promise.reject(error);
    }

};

exports.getByCode = async (req, res) => {
    try {
        const movieResponse = await movieModel.movieGetOne(req.params.movieCode);
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: movieResponse,
        }));
    } catch (error) {
        return Promise.reject(error);
    }
};

exports.insert = async (req, res) => {
    try {
        const movieResponse = await movieModel.movieInsert(req.body);
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: [],
            movieCode: movieResponse[0].insertId
        }));
    } catch (error) {
        return Promise.reject(error);
    }

};

exports.getByCodeComments = async (req, res) => {
    try {
        const movieResponse = await movieModel.movieGetComment(req.params.movieCode);
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: movieResponse,
        }));
    } catch (error) {
        return Promise.reject(error);
    }
};