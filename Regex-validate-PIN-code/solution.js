function validatePIN(pin) {
  let regX = /^(\d{4}|\d{6})$/;
  return regX.test(pin);
}


