import * as types from '../constants';
// import fetch from 'isomorphic-fetch';

// TODO move api constant to a config file
// const ROOT_API = 'http://localhost:5000/api/';

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

export function receiveData(request, json) {
  return {
    type: types.RECEIVE_DATA,
    items: JSON.parse(json),
    request,
    receivedAt: Date.now()
  };
}
export function fetchData(request) {
  console.log('inteding to Fetch');
  return (dispatch) => {
    console.log('in fetch data');
    return dispatch(requestData(request));
  };
}
/* export function fetchData(request) {
  console.log(request);
  // this is made possible by the thunk middle ware
  return dispatch => {

    dispatch(requestData(request));
    const api = ROOT_API + 'media';
    console.log(api);
    return fetch(api, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then(response => {
      console.log(response);
      response.json();
    })
    .then(json => dispatch(receiveData(request, json)))
    .catch(error => { console.log(error); });
  };
}
*/
