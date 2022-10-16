import * as actionTypes from "./actionTypes";
import { ERROR, SUCCESS } from "./constants";

export const GET_STATES_AND_OCCUPATIONS_ERROR = {
  type: actionTypes.SET_TOAST,
  data: {
    message: "Error getting states and occupations",
    theme: ERROR,
  },
};

export const POST_FORM_DATA_ERROR = {
  type: actionTypes.SET_TOAST,
  data: {
    message: "Error posting data",
    theme: ERROR,
  },
};

export const POST_FORM_DATA_SUCCESS = {
  type: actionTypes.SET_TOAST,
  data: {
    message: "Form submitted!",
    theme: SUCCESS,
  },
};

export const CLEAR_TOAST = {
  type: actionTypes.SET_TOAST,
  data: {
    message: "",
    theme: null,
  },
};
