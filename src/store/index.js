import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'ducks/reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Add a persisted state from localstorage or cookies
const persistedState = {};

export const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));
