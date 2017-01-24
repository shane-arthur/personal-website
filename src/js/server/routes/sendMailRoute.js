import { mailer } from '../utils/Emailer';

export default function (app) {
    app.post('/sendMail', (req, res) => {
        const name = req.body.Name;
        const email = req.body.Email;
        mailer.sendMail(name, email, req.body.Message).then(result => {
            res.json(result);
        }).catch(error => {
            console.log(error);
        });
    });
};