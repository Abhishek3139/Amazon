import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TreandingList from "../TreandingList/TreandingList";
import { focusContext } from "../../context";
import { removeSingleProduct } from "../../redux/features/cart/cartSlice";
import { quantity } from "../../shared/constants";
import "./ShoppingCart.css";
export default function ShoppingCart(props) {
  const dispatch = useDispatch();
  const { cart, amount, total } = useSelector((store) => store);
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const { focusFn } = useContext(focusContext);

  const handleSelectClicked = () => {
    setIsSelectClicked(true);
    console.log("hbgvguvhu");
  };

  const handleChange = (e, productId) => {
    cart.map((item) => {
      console.log(item.id, productId);
      if (item.id === productId) {
        item.amount = Number(e.target.value);
        console.log(item.amount);
      }
    });
  };

  return (
    <>
      <TreandingList />
      {cart.length ? (
        <div className="cart_Main_Container cartContainer" onClick={focusFn}>
          <div className="shopping_Cart">
            <h1>Shopping Cart</h1>
            <span id="price_Text">Price</span>
            <br />
            <hr />
            {cart.map((item) => {
              const { img, heading, rupee, item_Price, id } = item;
              return (
                <>
                  <div className="item_Cart_Data" key={id}>
                    <div>
                      <img src={img} style={{ width: "180px" }} />
                    </div>
                    <div style={{ width: "615px" }}>
                      <span id="item_Heading">{heading}</span>
                      <br />
                      <a href="#" id="cart_Links">
                        In stock
                      </a>
                      <br />
                      <span id="cart_Small_Text">
                        Sold By
                        <a href="#" id="cart_Links">
                          NHAM Apparels
                        </a>
                      </span>
                      <br />
                      <span id="cart_Small_Text">
                        Gift options not available.
                        <a href="#" id="cart_Links">
                          Learn more
                        </a>
                      </span>
                      <br />
                      <span id="cart_Small_Text">Size: S</span>
                      <br />
                      <span id="cart_Small_Text">Color: Black</span>
                      <br />
                      <select
                        onClick={handleSelectClicked}
                        className="shop_cart"
                        value={item.amount > 1 ? item.amount : 1}
                        onChange={(e) => {
                          handleChange(e, id);
                        }}
                      >
                        {!isSelectClicked ? (
                          <option>{item.amount > 1 ? item.amount : 1}</option>
                        ) : (
                          <>
                            {quantity.map((value) => {
                              return <option>{value}</option>;
                            })}
                          </>
                        )}
                      </select>
                      <button
                        className="delete-btn"
                        onClick={() => dispatch(removeSingleProduct(id))}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <span id="item_Rate">
                        {rupee}
                        {item_Price}.00
                      </span>
                    </div>
                    <br />
                  </div>
                  <hr />
                </>
              );
            })}
            <h4 style={{ float: "right" }}>
              Subtotal ({amount} item):{cart[0].rupee}
              {total}.00
            </h4>
          </div>

          <div className="cart_Sub_Total">
            <h4>
              Subtotal ({amount} item):{cart[0].rupee}
              {total}.00
            </h4>
          </div>
        </div>
      ) : (
        <>
          <div className="cart_Main_Container cartContainer" onClick={focusFn}>
            <h1>cart is empty</h1>
          </div>
        </>
      )}
    </>
  );
  //
  // );
}
