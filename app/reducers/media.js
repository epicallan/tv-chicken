import * as type from '../constants';

const initialState = {
  isfetching: false,
  viewAll: true,
  type: 1,
  items: [],
  id: null,
};

export default function media(state = initialState, action) {
  switch (action.type) {
    case type.REQUEST_DATA:
      return Object.assign({}, state, {
        isfetching: true
      });
    case type.RECEIVE_DATA:
      return Object.assign({}, {
        items: [...action.data, ...state.items],
        isfetching: false
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
