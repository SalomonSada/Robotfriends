import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from './constant';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestBots = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: users,
      })
    )
    .catch((err) =>
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: err,
      })
    );
};
