import * as types from '../constants/ActionTypes';

export function selectedCard(cardId) {
    return { type: types.SELECT_CARD, cardId };
};

export function toggleSuccessMessagePopup(emailAddress) {
    return { type: types.TOGGLE_SUCESS_MSG };
};

export function setEmailErrorMessage(message) {
    return { type: types.SET_EMAIL_ERROR_MSG, message };
};

export function setSelectedTab(tabItem) {
    return { type: types.SET_EMAIL_ERROR_MSG, tabItem };
};

