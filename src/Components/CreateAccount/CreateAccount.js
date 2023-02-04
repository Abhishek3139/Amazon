import "../CreateAccount/CreateAccount.css";

import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useContext } from "react";
import { focusContext } from "../../context";

export default function CreateAccount() {
  const { input, handleChange, handleSubmit } = useContext(focusContext);
  return (
    <div className="signInLogo">
      <Link to="/">
        <img src="/img/Amazon_logo.svg.webp" alt="" />
      </Link>
      <div className="newsignInBox">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <p>Your name</p>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
          <p>Mobile number</p>
          <input
            type="number"
            value={input.number}
            name="number"
            onChange={handleChange}
          />
          <p>Email (optional)</p>
          <input
            type="email"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            type="password"
            value={input.password}
            name="password"
            min="6"
            onChange={handleChange}
          />
          <button type="submit">Continue</button>
        </form>
        <br />
        <span>
          By continuing, you agree to Amazon's<a href=""> Conditions of Use</a>
          and
          <a href="#">Privacy</a>
        </span>
        <br />
      </div>

      <div className="footer">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}
