import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import throttle from 'lodash.throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const store = createStore(
	rootReducer /* preloadedState, */,
	persistedState,
	compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)),
);
/* eslint-enable */

store.subscribe(
	throttle(() => {
		saveState({
			items: store.getState().items,
		});
	}, 1000),
);

export default store;
