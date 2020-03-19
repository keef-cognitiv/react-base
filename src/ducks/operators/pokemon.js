import { setPokemon, setLoading } from 'ducks/actions';
import { normalizeWithUUID } from 'utils/helpers';
import { getData } from 'utils/axios';

export const getPokemon = () => async dispatch => {
  await dispatch(setLoading(true));
  const res = await getData(`/pokemon?limit=151`);
  const pokemon = await normalizeWithUUID(res.data.results);
  await dispatch(setPokemon(pokemon));
  return pokemon;
};
