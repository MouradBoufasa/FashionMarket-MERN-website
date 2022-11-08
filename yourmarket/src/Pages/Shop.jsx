import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/shop.css'
import Footer from '../Components/Footer'
import ProductsShop from '../Components/ProductsShop'

const Shop = () => {
  return (
    <div>
        <Navbar />
        <div className="s-row">
          <div className="s-col">
          <ProductsShop />
          </div>
          <div className="s-col">

          </div>
        </div>
        <Footer /> 
    </div>
  )
}

export default Shop