import React from "react";
import "../Local shops collection/LocalShopCollection.css";
export default function LocalShopCollection(props) {
  return (
    <div className="localShop">
      <h1>{props.heading}</h1>
      <a href="#">{props.link}</a>

      <div className="carpet">
        {props.img.map(function (value) {
          return (
            <>
              <img src={value.img} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
}
