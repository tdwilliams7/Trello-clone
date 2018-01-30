import { GETTING_ITEMS, RECEIVED_ITEMS } from '../actions';

const initialState = {
  items: [],
  newItem: '',
  gettingItems: false,
  receivedItems: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ITEMS:
      return { ...state, gettingItems: true }
    case RECEIVED_ITEMS:
      return { ...state, items: action.payload, gettingItems: false }
    default:
      return state;
  }
}
