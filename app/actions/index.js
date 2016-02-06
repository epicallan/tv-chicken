import * as types from '../constants';
import fetch from 'isomorphic-fetch';

// TODO move api constant to a config file
const ROOT_API = 'http://localhost:3000/api/';

export function requestData(request) {
  return {
    type: types.REQUEST_DATA,
    request
  };
}

export function searchForData(search) {
  // TODO first look through available data
  return fetchData(search);
}

export function receiveData(request, json) {
  return {
    type: types.RECEIVE_DATA,
    data: JSON.parse(json),
    request,
    receivedAt: Date.now()
  };
}

export function fetchData(request) {
  // this is made possible by the thunk middle ware
  return dispatch => {
    dispatch(requestData(request));
    const api = ROOT_API + request;
    return fetch(api)
      .then(response => response.json())
      .then(json => dispatch(receiveData(request, json)));
  };
}
