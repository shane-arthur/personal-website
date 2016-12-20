import fetch from 'isomorphic-fetch';
import { Promise } from 'bluebird';
import { endpoints } from '../config/index.config.js';

export default function getData(path) {
    const url = process.env.NODE_ENV === 'development' ?  `${endpoints.debug}/${path}` : `${endpoints.prod}/${path}`;
    return new Promise((resolve, reject) => {
        fetch(url).then(result => {
            resolve(result.json());
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    });
}