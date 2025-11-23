import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Store/userSlice.js"; // actions from slice

import { onAuthStateChanged } from "firebase/auth"; // firebase library utility API
import { auth } from "../utils/firebase.js"; // util function

// my components
import Browse from "./Browse.jsx";
import Login from "./Login.jsx";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // navigate hook

  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  // Execute only Once during initial.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        // see docs for a list of available properties. https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;

        // Dispatch an Action and updates the store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        // navigate to Browse route path
        navigate("/browse");
      } else {
        // User is signed out

        // Dispatch an Action and updates the store
        dispatch(removeUser());

        // navigate to Home route path
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;

// useNavigate() hook works inside 'RouterProvider' wrapper component.
// so, navigate() doesn't work for now. i will fix it in next commit.
