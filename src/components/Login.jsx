import { useState } from "react";
import Header from "./Header.jsx";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />

      <div className="bg-container absolute">
        <img
          alt="netflix background image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_small.jpg"
        />
      </div>

      <form className="signin-form  absolute left-0 right-0  mx-auto p-12 my-36 w-3/12 bg-black text-white rounded-lg opacity-90">
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
          type="text"
          placeholder="Email Address"
          className="my-6 p-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-6 p-4 w-full bg-gray-700"
        />
        <button className="my-6 p-4 w-full bg-red-700 rounded-lg">
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
