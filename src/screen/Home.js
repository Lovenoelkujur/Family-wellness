import React from 'react';
import "./Home.css";
import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div className='main'>
        <div className='component'>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Home