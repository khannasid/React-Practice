import React from 'react';
import "./Body.css";

const Body = () => {
  return (
    <div className='body'>
            <span className='heading'>
                The Easiest Way 
                <button className='box'>
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 16.59L18.29 10.29L19.71 11.71L12 19.41L4.29 11.71L5.71 10.29L12 16.59Z" />
                    </svg>
                </button>to Automate Reordering
            </span>
            <button className="demo1">
                Book a Demo!
            </button>
    </div>
  )
}

export default Body