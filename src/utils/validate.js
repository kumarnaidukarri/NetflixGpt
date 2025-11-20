const checkValideData = (email, password) => {
  // Email validation and Password validation using "Regex".
  const isEmailValid = /^[A-Za-z0-9._%+]+@+[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{4,15}$/.test(
      password
    ); // atleast 1 uppercase, 1 lowercase, 1 special symbol, 1 number

  if (!isEmailValid) {
    return "Email Id is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null; // email and password are passed valid
};

export { checkValideData };
