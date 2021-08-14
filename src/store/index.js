import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
	rootReducer /* preloadedState, */,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)),
);
/* eslint-enable */

export default store;
