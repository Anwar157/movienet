import { createContext, useEffect, useState } from "react";
import app from "../Components/Firebase/fireBaseInit";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //  Sign In function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //  Sign Up function
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

  //  Firebase Observer
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
    googleLogin,
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
