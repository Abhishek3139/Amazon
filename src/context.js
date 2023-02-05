import React, { useState } from "react";
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
  const validName = /^[A-Za-z]+$/;
  const validEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  const validNumber = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  const validPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [error, setError] = useState({});

  const validator = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "Name is required";
    } else if (!values.name.match(validName)) {
      error.name = "please enter a valid name";
    }
    if (!values.email) {
      error.email = "email is required";
    } else if (!values.email.match(validEmail)) {
      error.email = "please enter a valid email";
    }
    if (!values.number) {
      error.number = "number is required";
    } else if (!values.number.match(validNumber)) {
      error.number = "please enter a valid number";
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (!values.password.match(validPassword)) {
      error.password = "please enter a valid password";
    }
    return error;
  };

  function focusOnInput() {
    setFocus(true);
  }
  function focusOutOnInput() {
    setFocus(false);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validator(input));
    console.log(error);
    // setInput({ email: " ", password: " " });
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
        error,
      }}
    >
      {children}
    </focusContext.Provider>
  );
};
export { AppProvider };
