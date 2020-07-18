import { getData } from '../../utils/dataUtil';
import en from '../../../assets/strings/en';

const loginService = async (email, password) => {
  const storedEmail = await getData('email');
  const storedPassword = await getData('password');
  if (email === storedEmail && storedPassword === password) {
    return true;
  } else {
    throw en.INVALID_CRED;
  }
};

export {
  loginService,
};
