import axios from 'axios';
import {
  FETCHING_PLACE,
  FETCHING_PLACE_SUCCESS,
  FETCHING_PLACE_FAILURE,
  SET_PLACE,
} from './constants';

export const fetchingPlace = () => ({
  type: FETCHING_PLACE,
});

export const fetchingPlaceSuccess = places => ({
  type: FETCHING_PLACE_SUCCESS,
  places,
});

export const fetchingPlaceFailure = err => ({
  type: FETCHING_PLACE_FAILURE,
  err,
});

export const setPlace = result => ({
  type: SET_PLACE,
  result,
});

/*export const fetchPlace = id => async (dispatch, getState) => {
  dispatch(fetchingPlace());
  const URI = encodeURI(`/search/places?id=${id}`);
  console.log(URI);
  const res = await axios.get(URI);
  //console.log(res);
};*/

const initialState = {
  place: {},
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
        places: action.places,
      };
    case FETCHING_PLACE_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      };
    case SET_PLACE:
      return {
        ...state,
        place: action.result,
      };
    default:
      return state;
  }
}
