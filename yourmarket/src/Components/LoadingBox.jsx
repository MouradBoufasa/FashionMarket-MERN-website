import React from 'react'
import '../Styles/messagebox.css'
import Footer from './Footer'
import Navbar from './Navbar'

const LoadingBox = () => {
  return (
<div >  
    <Navbar />
        <div className="message-container">
                <h2 className="loadingmessage">Loading ....</h2>
        </div>
    <Footer />
</div>
  )
}

export default LoadingBox