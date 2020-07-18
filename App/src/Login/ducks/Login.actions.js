import * as actionTypes from './Login.types';
import * as services from './Login.service';
import en from '../../../assets/strings/en';

const updateLoginValue = (key, value) => ({
  type: actionTypes.LOGIN_UPDATE_VALUE,
  payload: { key, value },
});

const loginSetError = (key, error) => ({
  type: actionTypes.LOGIN_SET_ERROR,
  payload: { key, error },
});

const login = (email, password) => dispatch => {
  dispatch({ type: actionTypes.LOGIN_PROGRESS });
  services.loginService(email, password)
  .then((result) => {
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: { message: en.LOGIN_SUCCESS },
    });
  })
  .catch((error) => {
    dispatch({
      type: actionTypes.LOGIN_ERROR,
      payload: { message: error },
    });
  });
};

const clearLoginApiState = () => ({
  type: actionTypes.LOGIN_CLEAR_STATE,
});

export {
  updateLoginValue,
  loginSetError,
  login,
  clearLoginApiState,
};
