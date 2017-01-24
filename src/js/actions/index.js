import * as types from '../constants/ActionTypes';

export function selectedCard(cardId) {
    return { type: types.SELECT_CARD, cardId };
}

export function toggleSuccessMessagePopup() {
    return { type: types.TOGGLE_SUCESS_MSG };
}

