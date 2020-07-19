import * as actionTypes from './Login.types';

const INITIAL_STATE = {
  email: {
    value: '',
    error: '',
  },
  password: {
    value: '',
    error: '',
  },
  loginApiState: {
    isSuccess: false,
    isError: false,
    message: '',
  },
  loading: false,
};

function LoginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_UPDATE_VALUE:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          value: action.payload.value,
          error: '',
        },
      };
    case actionTypes.LOGIN_SET_ERROR:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          error: action.payload.error,
        },
      };
    case actionTypes.LOGIN_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loginApiState: {
          ...state,
          isSuccess: true,
          message: action.payload.message,
        },
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginApiState: {
          ...state,
          isError: true,
          message: action.payload.message,
        },
      };
    case actionTypes.LOGIN_CLEAR_API_STATE:
      return {
        ...state,
        loginApiState: {
          isSuccess: false,
          isError: false,
          message: '',
        },
      };
    case actionTypes.LOGIN_CLEAR_STATE:
      return {
        ...INITIAL_STATE,
        email: {
          value: '',
          error: '',
        },
        password: {
          value: '',
          error: '',
        },
      };
    default:
      return state;
  }
}

export default LoginReducer;