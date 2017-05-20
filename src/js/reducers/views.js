import { SELECT_CARD, TOGGLE_SUCESS_MSG, SET_EMAIL_ERROR_MSG } from '../constants/ActionTypes';

export default function views(state = {}, action) {
    switch (action.type) {
        case SELECT_CARD:
            return (setSelectedCard(state, action.cardId));
        case TOGGLE_SUCESS_MSG:
            return (AdjustPropertiesIfExisting(state, 'mail', {errorMessage: null, showSuccessPopup: true }));
        case SET_EMAIL_ERROR_MSG:
        return (AdjustPropertiesIfExisting(state, 'mail', {errorMessage : action.message} ));
        default:
            return state;
    }
}


const AdjustPropertiesIfExisting = (state, component, props) => {
    const exists = state.items.find(item => item.component === component);
    if (exists) {
        Object.keys(props).forEach(property => {
            exists[property] = props[property];
        });
    }
    return (Object.assign({}, state));
}

const setSelectedCard = (state, cardId) => {
    state.items.forEach(item => {
        if (item.id !== cardId) {
            item.selected = false;
        }
    });

    const selectedItem = state.items.find(item => { return item.id === cardId }) || null;
    const clearEmail = () => {
        selectedItem.showSuccessPopup = false;
        selectedItem.errorMessage = false;
    }
    if (selectedItem) {
        selectedItem.selected = !selectedItem.selected;
        if (selectedItem.component === 'mail') {
            clearEmail();
        }
    }
    return (Object.assign({}, state, { items: state.items }));
};



