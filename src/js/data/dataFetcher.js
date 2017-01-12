import fetch from 'isomorphic-fetch';
import { Promise } from 'bluebird';
import { endpoints } from '../config/index.config.js';

export function getData(path) {
    const url = formUrl(path);
    return new Promise((resolve, reject) => {
        fetch(url).then(result => {
            resolve(result.json());
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    });
}

export function sendData(path, data) {
    const url = formUrl(path);
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(response => {
            resolve(response.json())
        }).catch(error => {
            console.log(error);
            reject(error);
        });
    });
}

function formUrl(path) {
    return process.env.NODE_ENV === 'development' ? `${endpoints.debug}/${path}` : `${endpoints.prod}/${path}`;
};