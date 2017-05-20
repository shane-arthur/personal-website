import {combineReducers} from 'redux';
import views from './views';
import resume from './resume';
import tab from './tab'

const rootReducer = combineReducers({
    views,
    resume,
    tab
})

export default rootReducer