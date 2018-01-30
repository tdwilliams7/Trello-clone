export const GETTING_ITEMS = 'GETTING_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';

export const getItems = () => {
  return dispatch => {
    dispatch({ type: GETTING_ITEMS });
  }
}
