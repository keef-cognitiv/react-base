import { setErrorMessage, setModal, setLoading } from 'ducks/actions';

export const handleApiError = err => async dispatch => {
  let error_message = null;
  let status_message = null;

  if ((err || false).error) {
    error_message = JSON.stringify(err.error || 'Error');
  }

  if ((err || false).response || false) {
    error_message = JSON.stringify(err.response.data);
  }

  if ((err || false).message || false) {
    status_message = JSON.stringify(err.message);
  }

  await dispatch(setErrorMessage({ error_message, status_message }));
  await dispatch(setModal({ api_error: true }));
  await dispatch(setLoading(false));

  return err;
};
