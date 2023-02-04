import "../SignIn/SignIn.css";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="signIn">
      <div class="img2">
        <div class="one">
          <h2>
            Sign in for your best <br /> experience
          </h2>
          <button onClick={() => navigate("SIGNIN")}>Sign in securely</button>
        </div>
        <div class="two">
          <img src="/img/laptop.jpg" id="mob" alt="" />
          <p>Acer Aspire 3 AMD Ryzen 5 3500U Processor....</p>
          <FaStar id="staricon1" />
          <FaStar id="staricon" />
          <FaStar id="staricon" />
          <FaStarHalfAlt id="staricon" />
          <FaStarHalfAlt id="staricon" />
          <sup>418</sup>
          <p id="price">$364.57</p>
        </div>
      </div>
    </div>
  );
}
