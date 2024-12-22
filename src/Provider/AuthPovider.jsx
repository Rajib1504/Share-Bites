import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
const AuthPovider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loader, setLoader] = useState(true);
  const registration = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
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
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthPovider;
