import axios from 'axios';
export const GETTING_ITEMS = 'GETTING_ITEMS';
export const RECEIVED_ITEMS = 'RECEIVED_ITEMS';
export const ADDING_ITEM = 'ADDING_ITEM';
export const ADDED_ITEM = 'ADDED_ITEM';
export const UPDATING_STAGE = 'UPDATING_STAGE';
export const UPDATED_STAGE = 'UPDATED_STAGE';


const getUrl = 'http://localhost:3333/items';
const postUrl = 'http://localhost:3333/items/post';
const putUrl = 'http://localhost:3333/items/put';

export const getItems = () => {
  return dispatch => {
    dispatch({ type: GETTING_ITEMS });
    axios.get(getUrl)
      .then(({ data }) => {
        dispatch({ type: RECEIVED_ITEMS, payload: data });
      })
      .catch( err => {
        console.log(err);
      })
  }
}

export const addItem = (items) => {
  return dispatch => {
    dispatch({ type: ADDING_ITEM });
    axios.post(postUrl, items)
    .then(({ data })=> {
      //console.log('Data from server: ', data)
      dispatch({ type: ADDED_ITEM, payload: data });
    })
    .catch( err => {
      console.log(err)
    })
  }
}

export const changeStage = items => {
  return dispatch => {
    dispatch({ type: UPDATING_STAGE, });
    axios.put(putUrl, {data: {items}})
      .then(({ data }) => {
        dispatch({ type: 'UPDATED_STAGE', payload: data.items });
        console.log(data)
      })
      .catch( err => {
        console.log(err);
      })
  }
}
