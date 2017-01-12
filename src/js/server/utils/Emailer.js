import nodemailer from 'nodemailer';
import { Promise } from 'bluebird';

export const mailer = {
    sendMail: (sender, text) => {
        console.log('home : ' + sender);
        const mailOptions = { from: sender, to: 'shane.arthur@gmail.com', subject: 'Personal Website Email', text: text };
        const transporter = nodemailer.createTransport('smtps://shane.arthur@gmail.com:Dallas4mavs8@smtp.gmail.com');
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject('Error Sending email!');
                }
                resolve('successfully sent email!')
            });
        });
    }
}