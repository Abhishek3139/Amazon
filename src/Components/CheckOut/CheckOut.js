import Collapsible from "react-collapsible";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import {
  atmCardDetails,
  needHelpPara,
  personalInfo,
  savedAdress,
} from "../../shared/CheckOutData";
import "../CheckOut/CheckOut.css";
export default function Checkout() {
  return (
    <div className="check-out">
      <div className="check-out-nav">
        <div className="check-out-logo">
          <img
            src="/img/Amazon_logo.svg2222222222.png"
            width="103px"
            height="31px"
          />
        </div>
        <h1>Check Out</h1>
      </div>
      <Collapsible
        trigger={
          <>
            <div className="personal-info">
              <div className="check-out-head">
                <h3>1 Delivery Address</h3>
              </div>
              <div className="check-out-p-i">
                {personalInfo.map((value) => {
                  return <p id="p-i-adress">{value}</p>;
                })}

                <p id="p-i-adress">
                  <a href="#" className="blue-text">
                    Add delivery instructions
                  </a>
                </p>
              </div>
              <div className="collapsible blue-text">
                <Collapsible trigger="Change"></Collapsible>
              </div>
            </div>
          </>
        }
      >
        {savedAdress.map((value) => {
          return (
            <>
              <div className="hidden-adress">
                <h3>{value.heading}</h3>
              </div>
              <div className="saved-adress">
                <input type="radio" />
                <p>
                  {value.fullAdress}
                  <a className="blue-text">{value.link1}</a>|
                  <a className="blue-text">{value.link2}</a>
                </p>
              </div>
            </>
          );
        })}
        <div style={{ margin: "30px 0px 0px 4px" }}>
          <AiOutlinePlus />
          <a className="blue-text">Add a new address</a>
        </div>
      </Collapsible>
      <Collapsible
        trigger={
          <>
            <div className="personal-info">
              <div className="check-out-head">
                <h3>2 Payment method</h3>
              </div>
              <div className="check-out-p-i">
                <p id="p-i-adress">Pay on delivery (Cash/Card)</p>
                <p>
                  <MdOutlineKeyboardArrowDown />
                  Add a gift card or promotion code
                  <br />
                  <input type="text" placeholder="Enter Code" id="code-input" />
                  <button id="code-btn">Apply</button>
                </p>
              </div>
              <div className="collapsible blue-text">
                <Collapsible trigger="Change"></Collapsible>
              </div>
            </div>
          </>
        }
      >
        <div className="hidden-adress">
          <h3>Your available balance</h3>
        </div>
        <div style={{ margin: "15px 0px 20px 4px" }}>
          <AiOutlinePlus />
          <input type="text" id="payment-input" placeholder="Enter Code" />
          <button id="code-btn">Apply</button>
        </div>
        <div className="hidden-adress">
          <h3>Another payment method</h3>
        </div>
        {atmCardDetails.map((value, i) => {
          return (
            <>
              <div className="saved-adress">
                <input type="radio" />
                <p>{value.heading}</p>
              </div>
              <p id="lightMargin">
                {value.sub}
                <a className="blue-text">{value.link}</a>
              </p>
              <img src={value.img} id="lightMargin" />
              {value.id === 1 ? (
                <select key={value.id}>
                  {value.option.map((value) => (
                    <option>{value}</option>
                  ))}
                </select>
              ) : null}
            </>
          );
        })}
      </Collapsible>
      <div className="personal-info" style={{ height: "50px" }}>
        <h3>3 Offers</h3>
      </div>
      <div className="personal-info">
        <h3>4 Review items and delivery</h3>
      </div>
      <div
        className="personal-info"
        style={{
          height: "200px",
          width: "700px",
          display: "inline-block",
          fontSize: "12px",
          border: "none",
        }}
      >
        {needHelpPara.map((value) => (
          <p>{value}</p>
        ))}
      </div>
      <div className="place-order">
        <div className="down-border">
          <button id="place-order-btn">Place your Order</button>
          <p id="p-i-adress" style={{ fontSize: "12px", textAlign: "center" }}>
            By placing your order, you agree to Amazon's
          </p>
          <p id="p-i-adress" style={{ fontSize: "12px", textAlign: "center" }}>
            privacy notice and conditions of use.
          </p>
        </div>
        <div className="down-border">
          <h3>Order Summary</h3>
          <p id="p-i-adress">
            <span>items:</span>
            <span id="float-price">₹799.00</span>
          </p>
          <p id="p-i-adress">
            <span>Delivery:</span>
            <span id="float-price">₹0.00</span>
          </p>
        </div>
        <div className="down-border">
          <h3 style={{ margin: "0px", paddingTop: "20px", color: "#cc0c39" }}>
            Order Summary:
            <span id="float-price">₹799.00</span>
          </h3>
        </div>
        <div>
          <p style={{ color: "#cc0c39", marginTop: "10px" }}>
            Your Savings: ₹ 500.00 (38%)
          </p>
          <ul>
            <li style={{ padding: " 0px 0px 0px 20px", margin: "0px" }}>
              Item discount
            </li>
          </ul>
        </div>
        <div className="cost-div">
          <p>
            <a href="#">How are delivery costs calculated?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
