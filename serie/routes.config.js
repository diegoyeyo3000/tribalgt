const serieController = require('./controllers/serie.controller');
const passport = require('passport');

exports.routesConfig = async (app) => {
    app.post('/serie', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await serieController.insert(req, res);
        }
    ]);
    app.get('/serie', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await serieController.getAll(req, res);
        }
    ]);
    app.get('/serie/:serieCode', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await serieController.getByCode(req, res);
        }
    ]);
    app.get('/serie/comment/:serieCode', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await serieController.getByCodeComments(req, res);
        }
    ]);
};
