import { LOGIN } from '../actionTypes';
type StateType = {
  authenticated: boolean;
  googleAccessToken?: string;
};

type ActionTypes = {
  type: string;
  value: boolean;
  token?: string;
};

const initialState: StateType = {
  authenticated: false,
  googleAccessToken: null,
};

const reducer: (state: StateType, action: ActionTypes) => StateType = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: true,
        googleAccessToken: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
