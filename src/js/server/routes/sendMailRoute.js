import { mailer } from '../utils/Emailer';

export default function (app) {
    app.post('/sendMail', (req, res) => {
        console.log(req.body);
        const nameAndEmail = `${req.body.Name} : <${req.Email}>`;
        mailer.sendMail(nameAndEmail, req.Message).then(result => {
            console.log('hey faggot : ' + result);
        }).catch(error => {
            console.log(error);
        });
    });
};