import { useState, useRef } from "react";

import { checkValideData } from "../utils/validate.js";

import Header from "./Header.jsx";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // 'ref objects' to store Input DOM nodes
  const emailInputRefObj = useRef(null);
  const passwordInputRefObj = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValideData(
      emailInputRefObj.current.value,
      passwordInputRefObj.current.value
    );
    setErrorMessage(message); // updates the state

    // SignIn or SignUp flow
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }; // toggle signin form or signup form

  return (
    <div className="">
      <Header />

      <div className="bg-container absolute">
        <img
          alt="netflix background image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_small.jpg"
          className="h-screen w-screen"
        />
      </div>

      <form
        className="signin-form  absolute left-0 right-0  mx-auto p-12 my-36 w-3/12 bg-black text-white rounded-lg opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-6 p-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={emailInputRefObj}
          type="text"
          placeholder="Email Address"
          className="my-6 p-4 w-full bg-gray-700"
        />
        <input
          ref={passwordInputRefObj}
          type="password"
          placeholder="Password"
          className="my-6 p-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2"> {errorMessage} </p>
        <button
          className="my-6 p-4 w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span className="underline">
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
