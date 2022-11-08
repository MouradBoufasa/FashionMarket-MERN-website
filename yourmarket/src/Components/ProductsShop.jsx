import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {products} from '../data';
import ProductShop from './ProductShop';
import '../Styles/productsshop.css';
import ReactPaginate from 'react-paginate';

const ProductsShop = () => {


    const[data,setData]=useState(products);

    const[category,setCategory]=useState([]);
    


    const filterResult=(catItem) => {
        const result=products.filter((curDate) =>{
        return curDate.category === catItem;
    });
    setData(result);
}
    useEffect(()=> {
        const fetchData = async() => {
            const result = await axios.get('/api/category');
            setCategory(result.data);
        }
        fetchData();
}, []);

  return (
    <div className='shop-container'>
      <div className="shop-row">
        <div className="shop-col">
          <h2>Category</h2>
          <button className="shop-btn" onClick={() => setData(products)}>All<FontAwesomeIcon icon={faChevronRight} /></button>
          {/* show all category if exists */}
          {category.map((item) => (
              <button className="shop-btn" onClick={() => filterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight} /></button>
          ))}
        </div>
        <div className="shop-col">
          <div className="shop-products">
            {/* show product card */}
            {data.map((item) =>(
            <ProductShop item={item} key={item._id} />              
            ))}

          </div>
          <div className="shop-pagination">
            <ReactPaginate />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsShop