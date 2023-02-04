import React from "react";
import { Link } from "react-router-dom";
// import { primary } from "../shared/styles";
import "../Logo/Logo.css";
export default function Logo() {
  return (
    <Link to="/">
      <div>
        <div className="logo">
          <img src="/img/amazon_PNG25111111111111.png" alt="" />
        </div>
      </div>
    </Link>
  );
}
