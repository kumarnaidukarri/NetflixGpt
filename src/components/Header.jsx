import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js"; // util func
import { signOut, onAuthStateChanged } from "firebase/auth"; // firebase library

import { addUser, removeUser } from "../utils/Store/userSlice.js"; // actions from slice

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // {} or null

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

  // runs only on First render.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
    });
  }, []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2  bg-gradient-to-bottom from-black  flex justify-between items-center">
      <img
        className="w-44"
        alt="netflix logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex gap-2  p-2">
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
