import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { db } from "../config/fireBaseConfig";

export const loginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  // const auth = getAuth();
  const [register, setRegister] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const authentication = async (e) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail(e.target.value);
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const objectValue = {
    email,
    password,
    authentication,
  };
  return (
    <loginContext.Provider value={objectValue}>
      {children}
    </loginContext.Provider>
  );
};
