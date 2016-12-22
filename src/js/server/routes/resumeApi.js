import Resume from '../models/resume';

export default function (app) {
    app.get('/resumeApi', (req, res) => {
        Resume.find().then(result => {
            let state = {};
            state.resume = result[0].resume;
            res.json(state);
        }).catch(error => {
            console.log(`error fetching data : ${error} - will attempt to get default state from resources`);
            ///lets implement some fallback here if call isnt sucessful.
        });
    });
}