import dataFetcher from '../data/dataFetcher';

export default ({dispatch, getstate }) => next => action => {
    if (action.type === 'DATA_FETCH_REQUEST' && !action.data) {
        dataFetcher('cards').then(result => {
            return result;
        }).catch(error => {
            console.log(error);
        });
    }
    next(action);
}

