import * as actionTypes from './ForgotPassword.types';

const DEFAULT_API_STATE = {
  isSuccess: false,
  isError: false,
  message: '',
};
const INITIAL_STATE = {
  email: {
    value: '',
    error: '',
  },
  otp: {
    value: '',
    error: '',
  },
  newPassword: {
    value: '',
    error: '',
  },
  confirmPassword: {
    value: '',
    error: '',
  },
  matchOtpApiState: {
    ...DEFAULT_API_STATE,
  },
  updatePasswordApiState: {
    ...DEFAULT_API_STATE,
  },
  sendOTPApiState: {
    ...DEFAULT_API_STATE,
  },
  loading: false,
};

function ForgotPasswordReducer(state = INITIAL_STATE, action) {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.FP_UPDATE_VALUE:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          value: action.payload.value,
          error: '',
        },
      };
    case actionTypes.FP_SET_ERROR:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          error: action.payload.error,
        },
      };
    case actionTypes.FP_SEND_OTP_PROGRESS:
    case actionTypes.FP_OTP_MATCH_PROGRESS:
    case actionTypes.FP_OTP_SET_NEW_PASSWORD_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FP_OTP_MATCH_SUCCESS:
      return {
        ...state,
        matchOtpApiState: {
          ...state.matchOtpApiState,
          isSuccess: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case actionTypes.FP_OTP_MATCH_ERROR:
      return {
        ...state,
        matchOtpApiState: {
          ...state.matchOtpApiState,
          isError: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case actionTypes.FP_OTP_MATCH_CLEAR_API_STATE:
      return {
        ...state,
        matchOtpApiState: {
          ...DEFAULT_API_STATE,
        },
      };
    case actionTypes.FP_OTP_SET_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        updatePasswordApiState: {
          ...state.updatePasswordApiState,
          isSuccess: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case actionTypes.FP_OTP_SET_NEW_PASSWORD_ERROR:
      return {
        ...state,
        updatePasswordApiState: {
          ...state.updatePasswordApiState,
          isError: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case actionTypes.FP_OTP_SET_NEW_PASSWORD_CLEAR_API_STATE:
      return {
        ...state,
        updatePasswordApiState: {
          ...DEFAULT_API_STATE,
        },
      };
    case actionTypes.FP_SEND_OTP_SUCCESS:
      return {
        ...state,
        sendOTPApiState: {
          ...state.sendOTPApiState,
          isSuccess: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case actionTypes.FP_SEND_OTP_ERROR:
      return {
        ...state,
        sendOTPApiState: {
          ...state.sendOTPApiState,
          isError: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case actionTypes.FP_SEND_OTP_CLEAR_API_STATE:
      return {
        ...state,
        sendOTPApiState: {
          ...DEFAULT_API_STATE,
        },
      };
    default:
      return state;
  }
}

export default ForgotPasswordReducer;
