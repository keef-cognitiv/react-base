import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { modalsReducer } from './modalsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  modals: modalsReducer,
});

export default rootReducer;
