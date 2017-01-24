import { SELECT_CARD, TOGGLE_SUCESS_MSG } from '../constants/ActionTypes';

export default function views(state = {}, action) {
    switch (action.type) {
        case SELECT_CARD:
            return (setSelectedCard(state, action.cardId));
        case TOGGLE_SUCESS_MSG:
            return (toggleSucessMessage(state));
        default:
            return state;
    }
}

const AdjustPropertiesIfExisting = (state, component, props) => {
    const exists = state.items.find(item => item.component === component);
    if (exits) {
        Object.keys(props).forEach(property => {
            state[property] = props[property];
        });
    }
}

const toggleSucessMessage = (state) => {
    const exists = state.items.find(item => item.component === 'mail')
    if (exists) {
        exists['showSucessPopup'] = true;
    }

    return (Object.assign({}, state));
};

const setErrorMessage = (state) => {
}


const setSelectedCard = (state, cardId) => {
    state.items.forEach(item => {
        if (item.id !== cardId) {
            item.selected = false;
        }
    });

    const selectedItem = state.items.find(item => { return item.id === cardId }) || null;
    const clearEmail = () => {
        selectedItem.showSucessPopup = false;
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



