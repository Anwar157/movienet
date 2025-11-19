import { createContext, useEffect, useState } from "react";
import app from "../Components/Firebase/fireBaseInit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  Sign In function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  Sign Up function (if needed)
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Update profile (name, photo)
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //  Logout function
  const logOut = () => {
    return signOut(auth);
  };

  //  Firebase Observer - keeps user logged in automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth State Changed:", currentUser);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loginUser,
    registerUser,
    updateUserProfile,
    logOut,
    setUser,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
