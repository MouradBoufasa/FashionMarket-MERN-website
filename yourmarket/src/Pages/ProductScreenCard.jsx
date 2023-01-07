import React, { useContext } from 'react'
import { useState } from 'react';
import {TransformWrapper,TransformComponent} from 'react-zoom-pan-pinch';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import '../Styles/productscreencard.css';
import {Store} from '../Store.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ProductScreenCard = ({product}) => {

  

  const navigate = useNavigate();
  const [SelectedImage,setSelectedImage] = useState('');

  const {state, dispatch : ctxDispatch}  = useContext(Store);
  const {cart, wish} = state;
  const addToCartHandler = async () => {

        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1; // if existItem than quantity + 1 in cart if not  than 1
        //this you can put but you are not obligated to
        const {data} = await axios.get(`http://localhost:5000/api/products/${product.slug}`)
        if(data.countInStock < quantity) {
        window.alert('Sorry. This Product is out of Stock! ')
        return;
        }
        ctxDispatch({type:"CART_ADD_ITEM"
        ,payload: {...product, quantity
        }});
        navigate('/cart');
  };
  const addToWishHandler = async () => {

    const existItem = wish.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity : 1; // if existItem than quantity + 1 in cart if not  than 1


    //this you can put but you are not obligated to
          const {data} = await  axios.get(`http://localhost:5000/api/products/${product.slug}`)
    if(existItem) {
    window.alert('Sorry. You have already added this Product to your wish list')
    return;
    }

        ctxDispatch({type:"WISH_ADD_ITEM"
        ,payload: {...product, quantity
        }});
      navigate('/wish');
  };
  return (
  <div>
      <Navbar />
              <div className="screen-container">
                <div className="screen-row">
                  <div className="screen-col">
                      <div className="screen-images">
                        <div className="screen-top">

                          <TransformWrapper>
                            <TransformComponent>
                            <img src={SelectedImage || product.data.image} alt={product.data.title} />
                            </TransformComponent>
                          </TransformWrapper>

                        </div>
                        <div className="screen-bottom">
                            <img src={product.data.image} onClick={()=> setSelectedImage (`${product.data.image}`)} alt={product.data.title}/>
                            <img src={product.data.image1} onClick={()=> setSelectedImage (`${product.data.image1}`)} alt={product.data.title}/>
                            <img src={product.data.image2} onClick={()=> setSelectedImage (`${product.data.image2}`)} alt={product.data.title}/>
                            <img src={product.data.image3} onClick={()=> setSelectedImage (`${product.data.image3}`)} alt={product.data.title}/>
                        </div>
                      </div>
                  </div>
                  <div className="screen-col">
                      <div className="first-div div">
                          <h2 className="title">{product.data.title}</h2>
                            <p className="category">{product.data.category}</p>
                      </div>
                      <div className="second-div div">
                          <span className="price">Price: ${product.data.price}</span>
                            <div className="quantity">Quantity: 1</div>
                      </div>
                      <div className="third-div div">
                          <p className="desc">{product.data.desc}</p>
                      </div>
                      <div className="fourth-div div">
                      {product.countInStock === 0 ? (
                        <button className="cart cart-out" disabled>Out of Stock</button> )
                  : (   <button onClick={addToCartHandler}>Add to Cart</button>
                      )}
                          <button className="wish" onClick={addToWishHandler}>Add to Wish</button>
                      </div>
                  </div>
                </div>
              </div>    
      <Footer />
    </div>
  )
}

export default ProductScreenCard