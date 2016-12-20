import Resume from '../models/resume';

export default function (app) {
    app.get('/resumeApi', (req, res) => {
        Resume.find().then(result => {
            res.json(result);
        }).catch(error => {
            console.log(`error fetching data : ${error} - will attempt to get default state from resources`);
            ///lets implement some fallback here if call isnt sucessful.
        });
    });
}