// this file contains Firebase setup and its config data.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth"; // authentication utility function from firebase library

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBwOETYHnhZoMMVBUkPQC86vOiBf_jRHk",
  authDomain: "netflixgpt-6522e.firebaseapp.com",
  projectId: "netflixgpt-6522e",
  storageBucket: "netflixgpt-6522e.firebasestorage.app",
  messagingSenderId: "876503531436",
  appId: "1:876503531436:web:c2752901ebb63631a40409",
  measurementId: "G-X6XEMLMPC0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
const auth = getAuth(); // Firebase Auth instance
export { auth };

//
/* Firebase explanation */
/*
Shortcut easy steps to Deploy/Host your app in Firebase :-
 1)create a project in 'Firebase Developer Console'. copy and save 'SDK config data' safely.
 2)create a 'firebase.js' file in our local project and paste this 'SDK config data' here.
 3)commands:
   -> npm install firebase  
   -> npm install -g firebase-tools
   -> firebase --version
   -> firebase login
      it connects to your Firebase developer account and gives access to projects.
 4)setup configuration in local project.
   command: 
    firebase init 
   select options:
    -> Hosting: Set up deployments for static web apps
    -> use an Existing Project (netflixgpt) 
    -> public directory: folder 'dist' (if Vite)
    -> configure as singe-page-app rewrite all urls as index.html: "NO"
    -> setup auto build deploys for GITHUB: "NO"
   it creates "firebase.json" and ".firebaserc" config files in our project after doing above setup steps.  
  5)Hosting run:
    npm run build    - generates optimized code in a 'dist' or 'build' folder.
    firebase deploy  - deploys our app and gives deployed live URL.
                       it uploads project files from 'dist' folder to "Firebase Hosting servers (CDN)".
    note: when we update our Project code. follow these 2 commands for "Re-Deployment".
*/
//
// deployed live url = https://netflixgpt-6522e.web.app/

// Firebase Docs
/* Read 'Authentication with Firebase', Web(password authentication), Signin and Signup logic implementation*/
