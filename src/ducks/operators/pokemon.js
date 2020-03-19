import { setPokemon, setLoading } from 'ducks/actions';
import { getData } from 'utils/axios';

export const getPokemon = pokemon => async dispatch => {
  await dispatch(setLoading(true));
  const res = await getData(`/pokemon/${pokemon}`);
  await dispatch(setPokemon(res.data));
  return res.data;
};
