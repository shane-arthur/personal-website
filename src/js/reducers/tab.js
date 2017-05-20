import { SET_EMAIL_ERROR_MSG } from '../constants/ActionTypes';

export default function tab(state = {}, action) {
    switch (action.type) {
        case SET_EMAIL_ERROR_MSG:
        return {...state, selectedTab : action.tabItem};
        default:
            return state;
    }
}

