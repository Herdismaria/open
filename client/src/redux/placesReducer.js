import axios from 'axios';
import {
  FETCHING_PLACE,
  FETCHING_PLACE_SUCCESS,
  FETCHING_PLACE_FAILURE,
  RESET_PLACE,
} from './constants';
import { resetSearch } from './searchReducer';

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

export const resetPlace = () => ({
  type: RESET_PLACE,
});

export const fetchPlace = id => async (dispatch, getState) => {
  dispatch(fetchingPlace());
  dispatch(resetSearch());
  const URI = encodeURI(`/search/places?id=${id}`);
  const res = await axios.get(URI);
  dispatch(fetchingPlaceSuccess(res.data));
};

const initialState = {
  place: [],
  isLoading: false,
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PLACE:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_PLACE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        place: action.place,
      };
    case FETCHING_PLACE_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    case RESET_PLACE:
      return {
        ...state,
        place: [],
      };
    default:
      return state;
  }
}
