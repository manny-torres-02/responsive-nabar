
import React from 'react';
import Burger from './Burger';
import { useState } from 'react';
import './nav.css';
 
function Navbar() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };


  
  return (
    <div className="navigation">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>


      <div className="" onClick={toggleHamburger}>
        <Burger />
        {/* <div className='Burger'></div> */}
      </div>

      <style jsx>{`
      @media (max-width: 767px){
                  
      .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: blue;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: fixed;
                        

                    }
                  }
      `}

      </style>
    </div>

  );
}

export default Navbar