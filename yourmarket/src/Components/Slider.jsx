
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { sliderItems } from '../data.js'
import '../Styles/slider.css'

const Slider = () => {

    const [slideindex, setSlideIndex] = useState(0);


    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideindex > 0 ? slideindex - 1 : 2)
        } else {
            setSlideIndex(slideindex < 2 ? slideindex + 1 : 0)
        }
    }
    const [Slider,setSlider] = useState([]);
    useEffect(() => {
  
      const fetchData = async () => {
  
        const result = await axios.get('/api/slider');
  
        setSlider(result.data);
  
      }
      
      fetchData();
    },[]);

  return (
    <div classname="s-container">
        <div className="s-arrow left" onClick={() => handleClick("left")}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
        <div className="wrapper" setSlideIndex={slideindex} >
                {sliderItems.map((item) => (
                    <div className="slide" key={item._id}>
                    <div className="img-container">
                        <img src={item.image} id="s-img" alt="" />
                    </div>
                    </div>                    
                ))}
            </div>

        <div className="s-arrow right" onClick={() =>handleClick('right')}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
    <div className="s-arrow">
        
    </div>
    </div>
  )
}

export default Slider