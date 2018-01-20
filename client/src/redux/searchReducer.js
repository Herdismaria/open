import axios from 'axios';
import {
  FETCHING_RESULTS,
  FETCHING_RESULTS_SUCCESS,
  FETCHING_RESULTS_FAILURE,
  UPDATE_SEARCH_VALUE,
  RESET_SEARCH,
  FETCHING_PLACE,
  FETCHING_PLACE_SUCCESS,
  FETCHING_PLACE_FAILURE,
  SET_PLACE,
} from './constants';

export const fetchingResults = () => ({
  type: FETCHING_RESULTS,
});

export const fetchingResultsSuccess = results => ({
  type: FETCHING_RESULTS_SUCCESS,
  results,
});

export const fetchingResultsFailure = err => ({
  type: FETCHING_RESULTS_FAILURE,
  err,
});

export const fetchingPlace = () => ({
  type: FETCHING_PLACE,
});

export const fetchingPlaceSuccess = place => ({
  type: FETCHING_PLACE_SUCCESS,
  place,
});

export const fetchingPlaceFailure = err => ({
  type: FETCHING_PLACE_FAILURE,
  err,
});

export const updateSearchValue = value => ({
  type: UPDATE_SEARCH_VALUE,
  value,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const setPlace = result => ({
  type: SET_PLACE,
  result,
});

export const getResults = () => async (dispatch, getState) => {
  dispatch(fetchingResults());
  const URI = encodeURI(`/search/predictions?value=${getState().search.value}`);

  const res = await axios.get(URI);
  dispatch(fetchingResultsSuccess(res.data));
};

export const fetchPlace = id => async (dispatch, getState) => {
  dispatch(fetchingPlace());

  const URI = encodeURI(`/search/places?id=${id}`);
  const res = await axios.get(URI);
  dispatch(setPlace(res));
};

const initialState = {
  isLoading: false,
  results: [],
  value: '',
  error: '',
  searching: false,
  place: undefined,
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCHING_RESULTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_RESULTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.err,
      };
    case FETCHING_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        results: action.results,
        fetched: true,
      };
    case UPDATE_SEARCH_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case FETCHING_PLACE:
      return {
        ...state,
        place: undefined,
      };
    case FETCHING_PLACE_SUCCESS:
      return {
        ...state,
        place: action.place,
      };
    case RESET_SEARCH:
      return initialState;
    default:
      return state;
  }
}
