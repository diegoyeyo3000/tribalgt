const serieModel = require('../models/serie.model');

exports.getAll = async (req, res) => {
    try {
        const serieResponse = await serieModel.serieGetAll();
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: serieResponse
        }));
    } catch (error) {
        return Promise.reject(error);
    }

};

exports.getByCode = async (req, res) => {
    try {
        const serieResponse = await serieModel.serieGetOne(req.params.serieCode);
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: serieResponse,
        }));
    } catch (error) {
        return Promise.reject(error);
    }
};

exports.insert = async (req, res) => {
    try {
        const serieResponse = await serieModel.serieInsert(req.body);
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: [],
            serieCode: serieResponse[0].insertId
        }));
    } catch (error) {
        return Promise.reject(error);
    }

};

exports.getByCodeComments = async (req, res) => {
    try {
        const serieResponse = await serieModel.serieGetComment(req.params.serieCode);
        return Promise.resolve(res.status(200).send({
            statusCode: 200,
            result: true,
            message: 'Operación exitosa',
            records: serieResponse,
        }));
    } catch (error) {
        return Promise.reject(error);
    }
};