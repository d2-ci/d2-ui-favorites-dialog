import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

var configureStore = function configureStore() {
    var middlewares = [thunk];

    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    if (!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(reducer, composeEnhancers(applyMiddleware.apply(undefined, middlewares)));
};

export default configureStore;