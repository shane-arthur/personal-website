import nodemailer from 'nodemailer';
import { Promise } from 'bluebird';
let url = '';

export const mailer = {
    sendMail: (sender, email, text) => {
        const mailOptions = { from: sender, to: 'shane.arthur@gmail.com', subject: `<${email}> : Personal Website Email`, text: text };
        const transporter = nodemailer.createTransport(url);
        return new Promise((resolve, reject) => {
           // transporter.sendMail(mailOptions).then(() => {
                resolve(`Email successfully sent to ${email}`);
           // }).catch(error => {
            //    console.log(error);
          //  });
        });
    }
}