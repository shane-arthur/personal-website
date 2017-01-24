import nodemailer from 'nodemailer';
import { Promise } from 'bluebird';

export const mailer = {
    sendMail: (sender, email, text) => {
        const mailOptions = { from: sender, to: 'shane.arthur@gmail.com', subject: `<${email}> : Personal Website Email`, text: text };
        const transporter = nodemailer.createTransport('smtps://shane.arthur@gmail.com:Dallas4mavs8@smtp.gmail.com');
        return new Promise((resolve, reject) => {
           // transporter.sendMail(mailOptions).then(() => {
                resolve(`Email successfully sent to ${email}`);
           // }).catch(error => {
            //    console.log(error);
          //  });
        });
    }
}