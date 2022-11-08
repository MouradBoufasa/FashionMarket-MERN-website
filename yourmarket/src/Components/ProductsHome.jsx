import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductHome from './ProductHome'
import '../Styles/productshome.css'

function ProductsHome() {
  const [Products,setProducts] = useState([]);
  useEffect(() => {

    const fetchData = async () => {

      const result = await axios.get('/api/products');

      setProducts(result.data);

    }
    
    fetchData();
  },[]);
  return (
    <div className="hps-container">
      <h2>Check out the latest products</h2>
        <div className="hps-row">
        {Products.slice(-6).map((item) => (
          <ProductHome item={item} key={item._id} />
      
        ))}
        </div>
    </div>
  )
}

export default ProductsHome