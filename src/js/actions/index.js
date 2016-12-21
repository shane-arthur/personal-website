import * as types from '../constants/ActionTypes';

export function selectedCard(cardId) {
    return { type: types.SELECT_CARD, cardId };
}

