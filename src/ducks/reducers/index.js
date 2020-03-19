import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';
import { modalsReducer } from './modalsReducer';
import { pokemonReducer } from './pokemonReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  modals: modalsReducer,
  pokemon: pokemonReducer,
});

export default rootReducer;
