import { SET_APPLICATION_STATE } from './constants';

export const setState = state => ({
  type: SET_APPLICATION_STATE,
  state,
});

const initialState = {
  state: 'INACTIVE',
};

export default function applicationState(state = initialState, action) {
  switch (action.type) {
    case SET_APPLICATION_STATE:
      return {
        state: action.state,
      };
    default:
      return state;
  }
}
