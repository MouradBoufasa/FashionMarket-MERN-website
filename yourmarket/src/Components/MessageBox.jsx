import React from 'react'
import '../Styles/messagebox.css'
import Footer from './Footer'
import Navbar from './Navbar'

const MessageBox = (props) => {
  return (
<div >  
    <Navbar />
        <div className="message-container">
                <h2 className="message">{props.children}</h2>
        </div>
    <Footer />
</div>
  )
}

export default MessageBox