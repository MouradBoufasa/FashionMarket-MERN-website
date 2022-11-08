import React from 'react'
import Banners from '../Components/Banners'
import CategoryMain from '../Components/CategoryMain'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import ProductsHome from '../Components/ProductsHome'
import Slider from '../Components/Slider'

const Home = () => {
  return (
<div>
<Navbar />
<Slider />
<Banners />
<CategoryMain />
<ProductsHome />
<Newsletter />
<Footer />
</div>
  )
}

export default Home