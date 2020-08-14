import React from 'react';
import './Slider.css'

function Slider(props: any) {
    return (
        <div className="slide-container">
            <input 
                type="range" 
                min="0"    
                max="100" 
                value={props.slider} 
                className="slider" 
                onChange={(e) => props.setSlider(parseInt(e.target.value))} 
            />
        </div>
    );
  }
  
  export default Slider;