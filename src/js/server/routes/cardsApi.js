import Cards from '../models/cards';

export default function (app) {
    app.get('/cards', (req, res) => {
        Cards.find().then(result => {
            let state = {};
            state.views = result[0].views;
            res.json(state);
        }).catch(error => {
            console.log(`error fetching data : ${error} - will attempt to get default state from resources`);
            ///lets implement some fallback here if call isnt sucessful.
        });
    });
}