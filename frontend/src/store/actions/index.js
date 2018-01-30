import axios from 'axios';
export const GETTING_ITEMS = 'GETTING_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';
const getUrl = 'http://localhost:3333/items';

export const getItems = () => {
  return dispatch => {
    dispatch({ type: GETTING_ITEMS });
    axios.get(getUrl)
      .then(({ data }) => {
        dispatch({ type: RECEIVED_ITEMS, payload: data })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
