import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Store } from "../Store";
import "../Styles/quick.css";

const Quick = ({ item, setOpen, open }) => {
  console.log(open);

  const [Style, setStyle] = useState("main-container");
  const [SelectedImage, setSelectedImage] = useState("");

  const changestyle = () => {
    setStyle("main-container");
  };
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, wish } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1; // if existItem than quantity + 1 in cart if not  than 1

    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });

    //this you can put but you are not obligated to
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry. This Product is out of Stock! ");
      return;
    }

    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const addToWishHandler = async () => {
    const existItem = wish.wishItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity : 1; // if existItem than quantity + 1 in wish if not  than 1
    ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });

    //this you can put but you are not obligated to
    const { data } = axios.get(
      `http://localhost:5000/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry. This Product is out of Stock! ");
      return;
    }

    ctxDispatch({ type: "WISH_ADD_ITEM", payload: { ...item, quantity } });
  };

  return (
    <>
      <div className={Style}>
        <div className="card-quick" key={item._id}>
          <div className="card-row">
            <div className="card-images">
              <div className="card-top">
                <img src={SelectedImage || item.image} alt={item.title} />
              </div>
              <div className="card-bottom">
                <img
                  src={item.image}
                  onClick={() => setSelectedImage(`${item.image}`)}
                  alt={item.title}
                />
                <img
                  src={item.image1}
                  onClick={() => setSelectedImage(`${item.image1}`)}
                  alt={item.title}
                />
                <img
                  src={item.image2}
                  onClick={() => setSelectedImage(`${item.image2}`)}
                  alt={item.title}
                />
                <img
                  src={item.image3}
                  onClick={() => setSelectedImage(`${item.image3}`)}
                  alt={item.title}
                />
              </div>
            </div>
          </div>
          <div className="card-row">
            <div className="first-div div">
              <h2 className="title">{item.title}</h2>
              <p className="category">{item.category}</p>
            </div>
            <div className="second-div div">
              <span className="price">Price: ${item.price}</span>
              <div className="quantity">Quantity: 1</div>
            </div>
            <div className="third-div div">
              <p className="desc">{item.desc}</p>
            </div>
            <div className="fourth-div div">
              {item.countInStock === 0 ? (
                <button className="cart cart-out" disabled>
                  Out of Stock
                </button>
              ) : (
                <button className="cart" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              )}
              <button className="wish" onClick={addToWishHandler}>
                Add to Wish
              </button>
            </div>
          </div>
        </div>
        <button
          className="back"
          onClick={() => {
            changestyle();
            setOpen(!open);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default Quick;
