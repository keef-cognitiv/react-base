import { SET_POKEMON } from 'ducks/types';

export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
