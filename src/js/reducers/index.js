import {combineReducers} from 'redux';
import views from './views';
import resume from './resume';

const rootReducer = combineReducers({
    views,
    resume
})

export default rootReducer