import "./SignInPage.css";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useContext } from "react";
import { focusContext } from "../../context";

export default function SignInpage() {
  const { input, handleChange, handleSubmit } = useContext(focusContext);
  return (
    <div className="signInLogo">
      <Link to="/">
        <img src="/img/Amazon_logo.svg.webp" alt="" />
      </Link>
      <div className="signInBox">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <p>Email or mobile phone number</p>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={input.email}
          />
          <p>Password</p>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={input.password}
          />
          <button>Continue</button>
        </form>
        <br />
        <span>
          By continuing, you agree to Amazon's<a href=""> Conditions of Use</a>
          and
          <a href="#">Privacy</a>
        </span>
        <br />
        <div className="lastlink">
          <a href="#">
            <FaCaretRight id="arrow" />
            Need help?
          </a>
        </div>
      </div>
      <div className="hrline">
        <hr id="line" />
        New to Amazon?
        <hr id="line" />
      </div>

      <Link to={"/createAccount"}>
        <button className="createId">Create your Amazon account</button>
      </Link>
      <hr />
      <div className="footer">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Help</a>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}
