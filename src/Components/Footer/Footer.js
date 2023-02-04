import React from "react";
import { data, data1, data2, data3 } from "../../shared/FooterData";
import "../Footer/Footer.css";
function Footer(props) {
  return (
    <>
      <div className="footer-grid">
        <div>
          {data.map((data) => {
            return <li className="lists">{data}</li>;
          })}
        </div>
        <div>
          {data1.map((data1) => {
            return <li className="lists">{data1}</li>;
          })}
        </div>
        <div>
          {data2.map((data2) => {
            return <li className="lists">{data2}</li>;
          })}
        </div>
        <div>
          {data3.map((data3) => {
            return <li className="lists">{data3}</li>;
          })}
        </div>
        {/* <div className="grid-col">hii</div> */}
      </div>
    </>
  );
}

export default Footer;
