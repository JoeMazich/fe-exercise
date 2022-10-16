import * as actionTypes from "../constants/actionTypes";
import * as toastNotifications from "../constants/toastNotifications";
import axios from "axios";

export const getStatesAndOccupations = () => async (dispatch: DispatchType) => {
  try {
    const response = await axios.get("https://frontend-take-home.fetchrewards.com/form");

    dispatch({
      type: actionTypes.GET_STATES_AND_OCCUPATIONS,
      data: response.data,
    });
  } catch {
    dispatch(toastNotifications.GET_STATES_AND_OCCUPATIONS_ERROR);
  }
};

export const postFormData = (data: any) => async (dispatch: DispatchType) => {
  try {
    const response = await axios.post("https://frontend-take-home.fetchrewards.com/form", data);

    dispatch({
      type: actionTypes.POST_FORM_DATA,
      data: response,
    });
    dispatch(toastNotifications.POST_FORM_DATA_SUCCESS);
  } catch {
    dispatch(toastNotifications.POST_FORM_DATA_ERROR);
  }
};

export const clearToast = () => async (dispatch: DispatchType) => {
  dispatch(toastNotifications.CLEAR_TOAST);
};
