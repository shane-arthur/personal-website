import * as types from '../constants/ActionTypes';

export function selectedCard(cardId) {
    return { type: types.SELECT_CARD, cardId };
}

export function fetchData(source) {
    return { type: types.DATA_FETCH_REQUEST, source };
}

