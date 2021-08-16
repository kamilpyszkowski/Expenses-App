import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import throttle from 'lodash.throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer /* preloadedState, */, persistedState, applyMiddleware(thunk));
/* eslint-enable */

store.subscribe(
	throttle(() => {
		saveState({
			items: store.getState().items,
		});
	}, 1000),
);

export default store;
