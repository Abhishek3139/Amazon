import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import Searchbox from "../SearchBox/SearchBox";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  hiddenLanguageBoxData,
  yourAccountData,
  yourlistData,
} from "../../shared/constants";
import "../Navbar/Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [onOver, setOnOver] = useState(false);
  const [onEngOver, setOnEngOver] = useState(false);

  const { amount } = useSelector((store) => store);

  function hangleHover() {
    setOnOver(true);
  }
  function hangleLeave() {
    setOnOver(false);
  }
  function onEngHover() {
    setOnEngOver(true);
  }
  function onEngLeave() {
    setOnEngOver(false);
  }

  const engHiddenBox = hiddenLanguageBoxData.map(function (value) {
    return (
      <div id="langBtn">
        <input type="radio" name="languages" />
        <a href="#">{value}</a>
      </div>
    );
  });

  const yourListD = yourlistData.map(function (value) {
    return <a href="#">{value}</a>;
  });

  const yourAccountD = yourAccountData.map(function (value) {
    return <a href="#">{value}</a>;
  });
  return (
    <div className="navbar">
      <Logo />

      <div class="add">
        <a href="#" id="go` ">
          <span id="s1">Hello</span>
          <br />
          <HiOutlineLocationMarker id="fafa" />
          <span id="s2">Select your address</span>
        </a>
      </div>
      <Searchbox />
      <div class="english" onMouseOver={onEngHover} onMouseLeave={onEngLeave}>
        {onEngOver ? (
          <div>
            <div className="on_Eng_Hover">
              <input type="radio" value="eng" name="language" />
              <a href="#">English - IN</a>
              <div className="lang">
                {engHiddenBox}

                <div id="learnLink">
                  <a href="#">Learn More</a>
                </div>
              </div>
              <div id="flagText">
                <img src="/img/Flag_of_India.svg.webp" alt="" />
                You are shopping on Amazon.in
              </div>
              <div id="learnLink">
                <a href="#">Change country/region</a>
              </div>
            </div>

            <h5>English</h5>
            <img src="/img/Flag_of_India.svg.webp" alt="" />
            <FaCaretDown id="downicon" />
          </div>
        ) : (
          <div>
            <h5>English</h5>
            <img src="/img/Flag_of_India.svg.webp" alt="" />
            <FaCaretDown id="downicon" />
          </div>
        )}
      </div>

      <div class="hello" onMouseOver={hangleHover} onMouseLeave={hangleLeave}>
        {onOver ? (
          <div>
            <div className="on_Hover">
              <button
                onClick={() => {
                  navigate("SIGNIN");
                }}
              >
                Sign in
              </button>
              <br />
              <span>New customer?</span> <a href="#">Start here.</a>
              <div className="linkss">
                <div className="linksData_1">
                  <h1>Your Lists</h1>
                  {yourListD}
                </div>
                <div className="linksData_2">
                  <h1>Your Account</h1>
                  {yourAccountD}
                </div>
              </div>
            </div>
            <h5>Hello,sign in</h5>
            <span>Account & Lists</span>
            <FaCaretDown id="downicon" />
          </div>
        ) : (
          <div>
            <h5>Hello,sign in</h5>
            <span>Account & Lists</span>
            <FaCaretDown id="downicon" />
          </div>
        )}
      </div>
      <div class="return">
        <h5>Returns</h5>
        <span>& Orders</span>
      </div>
      <Link to={"/ShoppingCart"} style={{ textDecoration: "none" }}>
        <div class="cart">
          <FaShoppingCart id="carticon" />
          <span>Cart</span>
          <span id="cart_count">{amount}</span>
        </div>
      </Link>
      {props.children}
    </div>
  );
}
