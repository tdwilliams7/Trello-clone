import { GETTING_ITEMS, RECEIVED_ITEMS, ADDING_ITEM, ADDED_ITEM, UPDATING_STAGE, UPDATED_STAGE } from '../actions'

const initialState = {
  items: [],
  gettingItems: false,
  receivedItems: false,
  addingItem: false,
  updatingState: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ITEMS:
      return { ...state, gettingItems: true };
    case RECEIVED_ITEMS:
      return { ...state, items: action.payload, gettingItems: false };
    case ADDING_ITEM:
      return { ...state, addingItem: true };
    case ADDED_ITEM:
      return { ...state, items: action.payload, addingFalse: false, };
    case UPDATING_STAGE:
      return { ...state, updatingState: true };
    case UPDATED_STAGE:
      return { ...state, items: action.payload, updatingState: false }
    default:
      return state;
  }
}
