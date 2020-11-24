import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
} from './constant';

const InitalStateSearch = {
  searchField: '',
  isPending: false,
  robots: [],
  error: '',
};

export const searchRobots = (state = InitalStateSearch, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: payload,
        isPending: false,
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        error: payload,
        isPending: false,
      };
    default:
      return state;
  }
};
