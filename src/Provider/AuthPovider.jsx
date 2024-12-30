import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext();
const AuthPovider = ({ children }) => {
  const googleLogin = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loader, setLoader] = useState(true);
  const registration = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const popupLogin = () => {
    return signInWithPopup(auth, googleLogin);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("state Capture", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://zomato-server-delta.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((result) => {
            // console.log("login token", result.data);
            setLoader(false);
          });
      } else {
        axios
          .post(
            "https://zomato-server-delta.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((result) => {
            // console.log("log Out", result.data);
            setLoader(false);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const profileUpdate = (update) => {
    return updateProfile(auth.currentUser, update);
  };
  const logOut = () => {
    setLoader(true);
    signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    setLoader,
    profileUpdate,
    loader,
    registration,
    loginUser,
    logOut,
    popupLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthPovider;
