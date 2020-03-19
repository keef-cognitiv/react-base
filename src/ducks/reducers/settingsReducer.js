import { SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, SET_LOADING } from 'ducks/types';

const settingsState = {
  error_message: null,
  status_message: null,
  loading: false,
};
export const settingsReducer = (state = settingsState, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, ...action.payload };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, error_message: null, status_message: null };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
