import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import apiMiddleware from '../middleware/api';

const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware
)(createStore)


export default function configureStore(initialState) {
    console.log(initialState);
    console.log('Shane');
    const store = createStoreWithMiddleware(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        })
    }
    return store;
}