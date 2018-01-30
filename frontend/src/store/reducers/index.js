import { GETTING_ITEMS, RECEIVED_ITEMS, ADDING_ITEM, ADDED_ITEM} from '../actions'

const initialState = {
  items: [],
  gettingItems: false,
  receivedItems: false,
  addingItem: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ITEMS:
      return { ...state, gettingItems: true };
    case RECEIVED_ITEMS:
      return { ...state, items: action.payload, gettingItems: false };
    case ADDED_ITEM:
      return { ...state, addingItem: true };
    case ADDED_ITEM:
      return { ...state, items: action.payload, addingFalse: false, }
    default:
      return state;
  }
}
