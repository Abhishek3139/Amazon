// import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../ProductsDetials/ProductsDetialsItem.css";
import ReactStars from "react-rating-stars-component";
import { hoodiesData } from "../../shared/constants";
import TreandingList from "../TreandingList/TreandingList";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Customer from "../CustomerQ&A/CustomerQ&A";
import Reviews from "../CustomerQ&A/Reviews/Reviews";
import { focusContext } from "../../context";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/features/cart/cartSlice";
export default function ProductsDetialsItem(props, ls) {
  const [focus, setFocus] = useState(false);
  const [product, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { focusFn } = useContext(focusContext);
  // const refContainer=useRef(null)

  let { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    let productsData = hoodiesData.filter((value) => {
      return value.id == id;
    });
    setProducts(productsData[0]);
  }, []);

  function handleHover() {
    setFocus(true);
  }
  function handleHoverOut() {
    setFocus(false);
  }
  function StarRating(newRating) {
    return newRating;
  }
  return (
    <div onClick={focusFn}>
      <TreandingList />
      <div className="contanier">
        <div className="mainImg">
          {focus ? (
            <img src={"/img/ProductsDetails/Hoodie1.jpg"} />
          ) : (
            <img src={product.mainImg} alt="" />
          )}
        </div>
        <div className="products_Info">
          <a className=" links">{product.links}</a>
          <h1>{product.heading}</h1>
          <div className=" rating">
            <ReactStars
              count={5}
              size={24}
              onChange={StarRating}
              activeColor="#ffd700"
            />
            {/* <a>257 rating</a> <a>5 answered questions</a> */}
          </div>
          <div id="item_price">
            <span id="discount">{product.discount}</span>
            <sup>{product.rupee}</sup>
            <span id="price_rate">{product.item_Price}</span>
            <sup>00</sup>
            <br />
            <span id="mrp">{product.mrp}</span>
            <br />
            <span id="mrp_sub">{product.mrp_sub}</span>
          </div>
          <div className="offers">
            {product.saveExtra &&
              product.saveExtra.map((value) => {
                return (
                  <>
                    <div className="first_offer second_offer">
                      {/* <{value.icon} id="discount_icon" /> */}
                      <span id="subtitles">
                        <b>{value.bold}</b>
                        {value.next}
                      </span>
                    </div>
                  </>
                );
              })}
            <div className="third_offer">
              <a>See 1 more</a>
            </div>
          </div>
          <div className="return_icon_img">
            {product.deliveryIcon &&
              product.deliveryIcon.map((value) => {
                return (
                  <>
                    <div className="icons icons_2 icons_3">
                      <center>
                        <img src={value.img} alt="" />
                      </center>
                      <span className="delivery_sub">
                        {value.s1} <span>{value.s2}</span>
                      </span>
                    </div>
                  </>
                );
              })}
          </div>
          {/* <div className="return_icon_img">
            <div className=" icons">
              <center>
                <img src="/img/deliverIcons/free d.png" alt="" />
              </center>
              <span className="delivery_sub">Free Delivery</span>
            </div>
            <div className=" icons_2">
              <center>
                <img src="/img/deliverIcons/return.png" alt="" />
              </center>
              <span className="delivery_sub">
                10 days Returns <span>& Exchange</span>
              </span>
            </div>
            <div className=" icons_3">
              <center>
                <img src="/img/deliverIcons/ad.png" alt="" />
              </center>
              <span className="delivery_sub">
                Amazon <span>Delivered</span>
              </span>
            </div>
          </div> */}
          <div className="size_Detials">
            <span>
              <b>Fit:</b>
              <a>True to size. Order usual Size</a>
              <br />
              <br />
              <b>Size:</b>
              <br />
              <br />
              {product.sizeArr && (
                <select>
                  {product.sizeArr.map(function (value) {
                    return <option>{value.size}</option>;
                  })}
                </select>
              )}
              <br />
              <br />
              <b>Color Name:</b>
              <br />
              <br />
              {product.smallImg && (
                <>
                  {product.smallImg.map(function (value) {
                    return (
                      <img
                        src={value.img}
                        onMouseOver={handleHover}
                        onMouseOut={handleHoverOut}
                        alt=""
                      />
                    );
                  })}
                </>
              )}
              <br />
              <br />
              {product.liArr && (
                <ul>
                  {product.liArr.map(function (value) {
                    return <li>{value.li}</li>;
                  })}
                </ul>
              )}
            </span>
          </div>
        </div>
        <div className="cart_Box">
          <span id="price_rate">
            <sup>{product.rupee}</sup>
            {product.item_Price}
            <sup>00</sup>
          </span>
          <div className="delivery_Date">
            <span>
              <a className="links">Free Delivery</a> <b>Monday,21 November</b>.
              Order within <span id="green_char">18 hrs 8 mins.</span>
            </span>
          </div>
          <span>
            <HiOutlineLocationMarker />
            <a href="#" className="links">
              select Your Location
            </a>
          </span>
          <br />
          <br />

          <span id="green_char1">In stock.</span>
          <div href="#" className="delivery_Date">
            <span>
              Sold by{" "}
              <a href="#" className="links">
                SXV STYLE®
              </a>
              and
              <a href="#" className="links">
                {" "}
                Fulfilled by Amazon.
              </a>
            </span>
          </div>
          <span>Quantity:</span>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className=" btn_buy">
            <button
              id="btn_add"
              onClick={() => {
                dispatch(getProduct(product));
              }}
            >
              Add to Cart
            </button>
            <Link to={"/checkOut"}>
              <button id="btn_buy">Buy Now</button>
            </Link>
          </div>
          <div id="input_check">
            <input type="checkbox" />
            Add gift options
          </div>
          <button id="add_wish">Add to Wish List</button>
        </div>
      </div>
      <div className="products_sub_detials">
        <h1>Product details</h1>
        <div>
          {product.productsDetails &&
            product.productsDetails.map((value) => {
              return (
                <>
                  <span>
                    <b>{value.bold}</b> {value.next}
                  </span>
                  <br />
                </>
              );
            })}
        </div>
      </div>
      <div>
        <h1 style={{ marginLeft: "20px" }}>Customer questions & answers</h1>
        <Customer />
      </div>
      <Reviews />
      {/* <HoodiesList hd={hoodiesData} /> */}
    </div>
  );
}
