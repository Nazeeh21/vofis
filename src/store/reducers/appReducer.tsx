import {
  CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
  CHANGE_NEXT_BUTTON_STATUS,
} from '../actionTypes';

type StateType = {
  nextButtonOnSignUpClicked: boolean;
  showAddTeamMembersPage: boolean;
};

type ActionTypes = {
  type: string;
  value: boolean;
};

const initialState: StateType = {
  nextButtonOnSignUpClicked: false,
  showAddTeamMembersPage: false,
};

const reducer: (state: StateType, action: ActionTypes) => StateType = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CHANGE_NEXT_BUTTON_STATUS:
      return {
        ...state,
        nextButtonOnSignUpClicked: action.value,
      };
    case CHANGE_ADD_MORE_DETAILS_PAGE_STATUS:
      return {
        ...state,
        showAddTeamMembersPage: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
