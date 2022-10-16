import * as actionTypes from "../constants/actionTypes";

const initalState = {
  occupations: [],
  states: [],
  toast: {
    message: "",
    theme: null,
  },
};

const reducer = (state: any = initalState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.GET_STATES_AND_OCCUPATIONS:
      return {
        ...state,
        states: action.data.states,
        occupations: action.data.occupations,
      };
    case actionTypes.SET_TOAST:
      return {
        ...state,
        toast: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
