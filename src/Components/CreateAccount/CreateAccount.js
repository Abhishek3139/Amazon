import "../CreateAccount/CreateAccount.css";

import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useContext } from "react";
import { focusContext } from "../../context";

export default function CreateAccount() {
  const { input, handleChange, handleSubmit, error } = useContext(focusContext);
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
          {error.name && <span className="error">{error.name}</span>}

          <p>Mobile number</p>
          <input
            type="text"
            value={input.number}
            name="number"
            onChange={handleChange}
          />
          {error.number && <span className="error">{error.number}</span>}

          <p>Email</p>
          <input
            type="text"
            value={input.email}
            name="email"
            onChange={handleChange}
          />
          {error.email && <span className="error">{error.email}</span>}

          <p>Password</p>
          <input
            type="password"
            value={input.password}
            name="password"
            min="6"
            onChange={handleChange}
          />
          {error.password && <span className="error">{error.password}</span>}

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
