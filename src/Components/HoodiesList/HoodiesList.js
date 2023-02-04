import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import { Link } from "react-router-dom";
import "../HoodiesList/HoodiesList.css";
export default function HoodiesList(props) {
  return (
    <div className="Hoodies_Items">
      <div className="hoodies_all_items">
        <div className="hoodies_data">
          <h2 id="main_header">
            Customers who viewed items in your browsing history also viewed
          </h2>
          {props.hd.map(function (value) {
            return (
              <div className="hoodies_Img">
                <Link to={`/ProductsDetialsItem/${value.id}`}>
                  <img src={value.img} alt="" />
                </Link>
                <span id="sub_title">{value.heading}</span>
                <div className="star_rating">
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarFull />
                  <ImStarHalf />
                  <ImStarEmpty />
                  <sup id="item_rating_no">{value.star_Rating_No}</sup>
                </div>
                <span className="price_symbol">
                  ₹<span className="price_rate">{value.item_Price}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
