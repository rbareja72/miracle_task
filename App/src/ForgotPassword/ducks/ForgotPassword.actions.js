import * as actionTypes from './ForgotPassword.types';
import { matchOTPService, saveNewPasswordService, sendOTPService } from './ForgotPassword.service';

const updateValue = (key, value) => ({
  type: actionTypes.FP_UPDATE_VALUE,
  payload: { key, value },
});

const setError = (key, error) => ({
  type: actionTypes.FP_SET_ERROR,
  payload: { key, error },
});

const matchOtpAction = (otp) => dispatch => {
  dispatch({ type: actionTypes.FP_OTP_MATCH_PROGRESS });
  matchOTPService(otp).then((result) => {
    dispatch({ type: actionTypes.FP_OTP_MATCH_SUCCESS, payload: { message: result } });
  }).catch((error) => {
    dispatch({ type: actionTypes.FP_OTP_MATCH_ERROR, payload: { message: error } });
  });
};

const clearMatchOTPState = () => ({
  type: actionTypes.FP_OTP_MATCH_CLEAR_API_STATE,
});

const updatePasswordAction = (password) => dispatch => {
  dispatch({ type: actionTypes.FP_OTP_SET_NEW_PASSWORD_PROGRESS });
  saveNewPasswordService(password).then((result) => {
    dispatch({ type: actionTypes.FP_OTP_SET_NEW_PASSWORD_SUCCESS, payload: { message: result } });
  }).catch((error) => {
    dispatch({ type: actionTypes.FP_OTP_SET_NEW_PASSWORD_ERROR, payload: { message: error } });
  });
};

const clearSetNewPasswordState = () => ({
  type: actionTypes.FP_OTP_SET_NEW_PASSWORD_CLEAR_API_STATE,
});

const sendOTP = (email) => dispatch => {
  dispatch({ type: actionTypes.FP_SEND_OTP_PROGRESS });
  sendOTPService(email).then((result) => {
    dispatch({ type: actionTypes.FP_SEND_OTP_SUCCESS, payload: { message: result } });
  }).catch((error) => {
    dispatch({ type: actionTypes.FP_SEND_OTP_ERROR, payload: { message: error } });
  });
};

const clearSendOTPApiState = () => ({
  type: actionTypes.FP_SEND_OTP_CLEAR_API_STATE,
});

export {
  updateValue,
  setError,
  matchOtpAction,
  clearMatchOTPState,
  updatePasswordAction,
  clearSetNewPasswordState,
  clearSendOTPApiState,
  sendOTP,
};
