import * as constants from 'ducks/types';

// ------ MODALS ACTIONS ------ //
export const setModal = modal => ({
  type: constants.SET_MODAL,
  payload: modal,
});

// ------ SETTINGS ACTIONS ------ //
export const setErrorMessage = error_message => ({
  type: constants.SET_ERROR_MESSAGE,
  payload: error_message,
});
export const clearErrorMessage = () => ({
  type: constants.CLEAR_ERROR_MESSAGE,
});
export const setLoading = loading => ({
  type: constants.SET_LOADING,
  payload: loading,
});

// ------ POKEMON ACTIONS ------ //
export const setPokemon = pokemon => ({
  type: constants.SET_POKEMON,
  payload: pokemon,
});
