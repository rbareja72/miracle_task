const validateEmail = (email) => {
  const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/);
  return emailRegex.test(email);
};

/**
 * must be of the length between 8 and 32.
 */
const validatePassword = (password) => {
  const passwordRegex = new RegExp(/^.{8,32}$/);
  return passwordRegex.test(password);
};

export {
  validateEmail,
  validatePassword,
};
