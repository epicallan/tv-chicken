import * as types from '../constants';
import fetch from 'isomorphic-fetch';

// TODO move api constant to a config file
const ROOT_API = 'http://localhost:5000/api/';

export function requestData(request) {
  return {
    type: types.REQUEST_DATA,
    request
  };
}

export function searchForMedia(search) {
  // TODO first look through available data
  return fetchData(search);
}

export function addToCart(title) {
  return {
    type: types.AddToCart,
    title,
  };
}

export function showCheckout(show) {
  return {
    type: types.ShowCheckout,
    show,
  };
}

export function removeFromCart(title) {
  return {
    type: types.RemoveFromCart,
    title,
  };
}

export function receiveData(request, json) {
  return {
    type: types.RECEIVE_DATA,
    items: json,
    request,
    receivedAt: Date.now()
  };
}

export function fetchInitialData(request) {
  return (dispatch) => {
    return dispatch(fetchData(request));
  };
}

function fetchData(request) {
  return async (dispatch) => {
    dispatch(requestData(request));
    const api = ROOT_API + 'media';
    const response = await fetch(api, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });
    const json = await response.json();
    dispatch(receiveData(request, json));
  };
}
