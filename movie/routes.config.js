const movieController = require('./controllers/movie.controller');
const passport = require('passport');

exports.routesConfig = async (app) => {
    app.post('/movie', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await movieController.insert(req, res);
        }
    ]);
    app.get('/movie', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await movieController.getAll(req, res);
        }
    ]);
    app.get('/movie/:movieCode', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await movieController.getByCode(req, res);
        }
    ]);
    app.get('/movie/comment/:movieCode', [
        passport.authenticate('bearer', { session: false }),
        async (req, res) => {
            return res = await movieController.getByCodeComments(req, res);
        }
    ]);
};
