import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-Config";
import { createContext } from "react";
// import { reducer } from "./reducer";

export const focusContext = createContext();

const AppProvider = ({ children }) => {
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });
  const [inputData, setInputData] = useState([]);

  function focusOnInput() {
    setFocus(true);
  }
  function focusOutOnInput() {
    setFocus(false);
  }

  // --------------------------Authentication code-------------------------------

  const createAccount = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        input.name,
        input.number,
        input.email,
        input.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData(input);
    console.log(inputData);
    createAccount();
    logIn();
    setInput({ email: " ", password: " " });
  };

  // -----------------------------------------------------------------------------
  return (
    <focusContext.Provider
      value={{
        focus,
        focusState: [focus, setFocus],
        focusFn: focusOutOnInput,
        input: [input, setInput],
        handleChange: handleChange,
        handleSubmit: handleSubmit,
      }}
    >
      {children}
    </focusContext.Provider>
  );
};
export { AppProvider };
