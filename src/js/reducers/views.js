import { SELECT_CARD, HIDE_CARD } from '../constants/ActionTypes';

export default function views(state = {}, action) {
    switch (action.type) {
        case SELECT_CARD:
            return (setSelectedCard(state, action.cardId));
        default:
            return state;
    }
}

function setSelectedCard(state, cardId) {
    state.items.forEach(item => {
        if (item.id !== cardId) {
            item.selected = false;
        }
    });
    const selectedItem = state.items.find(item => { return item.id === cardId }) || null;
    selectedItem.selected = !selectedItem.selected;
    return (Object.assign({}, state, { items: state.items }));
};

