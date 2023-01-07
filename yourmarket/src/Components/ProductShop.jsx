import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import '../Styles/productshop.css';
import {products} from '../data';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import axios from 'axios';

const ProductShop = ({item}) => {


  const {state, dispatch : ctxDispatch}  = useContext(Store);
  const {cart,wish}= state;
 const addToCartHandler = async () => {
  const existItem = cart.cartItems.find((x) => x._id === item._id);
  const quantity = existItem ? existItem.quantity + 1 : 1; // if existItem than quantity + 1 in cart if not  than 1


ctxDispatch({type:"CART_ADD_ITEM",payload: {...item, quantity}})

  //this you can put but you are not obligated to
  const {data} = await axios.get(`http://localhost:5000/api/products/${item._id}`)
  if(data.countInStock < quantity) {
  window.alert('Sorry. This Product is out of Stock! ')
  return;
  }
 

        ctxDispatch({type:"CART_ADD_ITEM",payload: {...item, quantity}})

  };

  const addToWishHandler = () => {
    const existItem = wish.wishItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity : 1; // if existItem than quantity + 1 in wish if not  than 1

    ctxDispatch({type:"CART_ADD_ITEM",payload: {...item, quantity}})


    //this you can put but you are not obligated to
    const {data} = axios.get(`http://localhost:5000/api/products/${item._id}`)
    if(data.countInStock < quantity) {
    window.alert('Sorry. This Product is out of Stock! ')
    return;
    }

        ctxDispatch({type:"WISH_ADD_ITEM",payload: {...item, quantity}})

  };
  
  
  return (
    <div className='ps-card'>
      <div className="card-header">
        <Link to ={`/product/${item.slug}`}>
        <img src={item.image} alt={item.title} />
        </Link>
      </div>
      <div className="card-body">
        <h3 className="title">{item.title}</h3>
        <span>${item.price}</span>
        </div>
        <div className="card-footer">
          <button><FontAwesomeIcon icon={faHeart} onClick={addToWishHandler}/></button>
          {item.countInStock === 0 ? (
            <button className="cart cart-out" disabled>Out of Stock</button> )
          : (   <button><FontAwesomeIcon icon={faShoppingBag} onClick={addToCartHandler}/></button>
          )}
        </div>
    </div>
  )
}

export default ProductShop