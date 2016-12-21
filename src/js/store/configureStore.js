import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import apiMiddleware from '../middleware/api';
import { initialState } from '../constants/mainpageInitialState';

const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware
)(createStore)


export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        })
    }
    return store;
}