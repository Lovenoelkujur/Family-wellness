import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className='main'>
        <div className='title'>
            <h1 className='head'>Family Wellness</h1>
            <h3 className='co-head'>MASSAGE THERAPY</h3>
        </div>
        <div className='nav'>
            <ul>
                <li className='active'>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>FAQ</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Header