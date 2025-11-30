import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js"; // util func
import { signOut, onAuthStateChanged } from "firebase/auth"; // firebase library

import { addUser, removeUser } from "../utils/Store/userSlice.js"; // actions from slice
import { toggleGptSearchView } from "../utils/Store/GptSlice.js";
import { changeLanguage } from "../utils/Store/languageSlice.js";

import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants.js";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // {} or null
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); // true or false

  // it returns current logged in user object.  i.e, {} or null
  // const currentUser = auth.currentUser;

  const handleSignOut = () => {
    // Firebase Signout logic
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/"); // navigate to Home route page
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        // navigate("/error"); // navigate to Error route page
      });
  };

  const handleGptSearchClick = () => {
    // toggle Gpt Search button  show/hide
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    // console.log(event.target.value);
    dispatch(changeLanguage(event.target.value)); // dispatch an action, updates the redux store.
  };

  // runs only on First render.
  useEffect(() => {
    const unsubscribeFn = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        // see docs for a list of available properties. https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        // Dispatch an Action and updates the store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // Navigate to Browse route page
        navigate("/browse");
      } else {
        // User is signed out

        // Dispatch an Action and updates the store
        dispatch(removeUser());

        // Navigate to Home route page(signin)
        navigate("/");
      }

      // Cleanup fn
      return () => {
        // when Component Unmounts, onAuthStateChange Event listener gets removed.
        unsubscribeFn();
      };
    });
  }, []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2  bg-gradient-to-bottom from-black  flex justify-between items-center">
      <img className="w-44" alt="netflix logo" src={LOGO} />
      {user && (
        <div className="flex gap-2  p-2">
          {/* select box with supported languages options */}

          <select
            className="p-2 m-2 text-white bg-gray-900"
            onClick={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((language) => {
              return (
                <option value={language.identifier} key={language.identifier}>
                  {language.name}
                </option>
              );
            })}
          </select>

          <button
            className="search-button  px-4 py-2 mx-2 text-white bg-purple-800 rounded-lg cursor-pointer hover:bg-purple-700"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "Home page"}
          </button>
          <img alt="user-icon" className="w-12 h-12" src={user?.photoURL} />
          <button
            className="font-bold px-4 py-2 cursor-pointer rounded-sm bg-red-400 hover:bg-red-500 hover:text-white"
            onClick={handleSignOut}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
