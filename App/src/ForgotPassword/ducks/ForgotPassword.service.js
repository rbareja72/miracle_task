import { storeData, getData } from './../../utils/dataUtil';
import en from '../../../assets/strings/en';

const matchOTPService = async (otp) => {
  const storedOTP = await getData('otp');
  if (storedOTP === otp) {
    return en.OTP_MATCHED;
  } else {
    throw en.OTP_DOES_NOT_MATCH;
  }
};

const saveNewPasswordService = async (password) => {
  try {
    await storeData('password', password);
    return en.SUCCESSFULLY_CHANGED;
  } catch (e) {
    throw en.ERROR_SAVING_PASSWORD;
  }
};

const sendOTPService = async (email) => {
  const storedEmail = await getData('email');
  if (storedEmail === email) {
    return en.OTP_SENT;
  } else {
    throw en.EMAIL_DOES_NOT_EXIST;
  }
};

export {
  matchOTPService,
  saveNewPasswordService,
  sendOTPService,
};
