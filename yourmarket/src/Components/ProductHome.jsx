import { faEye , faHeart , faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../Styles/producthome.css';
import Quick from './Quick';



const ProductHome = ({item}) => {
  const [Open,setOpen] = useState(false);

  
  return (
<div className="hp-card">
  <div className="card-header">
    <img src={item.image} alt={item.title} />
  </div>
  <div className="card-body">
<h3 className="title">{item.title}</h3>
<span>${item.price}</span>
  </div>
  <div className="card-footer">
    <button onClick={()=> setOpen(true)} className="eye"><FontAwesomeIcon icon={faEye} /></button>
    <button><FontAwesomeIcon icon={faHeart} /></button>
    <button><FontAwesomeIcon icon={faShoppingCart} /></button>


  </div>
  {Open && <Quick item={item} />}
</div>
  )
}

export default ProductHome