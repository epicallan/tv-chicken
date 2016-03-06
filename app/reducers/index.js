import * as type from '../constants';

const initialState = {
  isFetching: false,
  viewAll: true,
  type: 1,
  items: [],
  inCart: [],
  showCheckout: false,
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case type.REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case type.ShowCheckout:
      return Object.assign({}, state, {
        showCheckout: action.show
      });
    case type.AddToCart:
      return Object.assign({}, state, {
        inCart: [action.title, ...state.inCart],
      });
    case type.RemoveFromCart:
      const newCart = state.inCart.filter(title => title !== action.title);
      return Object.assign({}, state, {
        inCart: newCart,
      });
    case type.RECEIVE_DATA:
      return Object.assign({}, state, {
        items: [...action.items, ...state.items],
        isFetching: false
      });
    case type.VIEW_ALL:
      return Object.assign({}, state, {
        viewAll: true
      });
    case type.VIEW_SELECTED:
      return Object.assign({}, state, {
        viewAll: false
      });
    default:
      return state;
  }
}
