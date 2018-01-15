import {
  FETCHING_SUGGESTIONS,
  FETCHING_SUGGESTIONS_SUCCESS,
  FETCHING_SUGGESTIONS_FAILURE,
  FETCHING_RESULTS,
  FETCHING_RESULTS_SUCCESS,
  FETCHING_RESULTS_FAILURE,
} from './constants';

export const fetchingResults = () => ({
  type: FETCHING_RESULTS,
});

// results: [prediction, prediction, prediction]
export const fetchingResultsSuccess = results => ({
  type: FETCHING_SUGGESTIONS_SUCCESS,
  results,
});

export const fetchingResultsFailure = err => ({
  type: FETCHING_SUGGESTIONS_FAILURE,
  err,
});

export const fetchingSuggestions = () => ({
  type: FETCHING_SUGGESTIONS,
});

export const fetchingSuggestionsSuccess = query => ({
  type: FETCHING_SUGGESTIONS_SUCCESS,
  query,
});

export const fetchingSuggestionsFailure = err => ({
  type: FETCHING_SUGGESTIONS_FAILURE,
  err,
});

const initialState = {
  isLoading: false,
  results: [],
  options: [],
  value: '',
  error: '',
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCHING_SUGGESTIONS:
    case FETCHING_RESULTS:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_SUGGESTIONS_FAILURE:
    case FETCHING_RESULTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: err,
      };
    case FETCHING_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        suggestions: results.filter(result =>
          result.main_text.toLowerCase().startsWith(action.query)
        ),
      };
    case FETCHING_RESULTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        results: action.results,
      };
    default:
      return state;
  }
}
