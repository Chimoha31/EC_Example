import React from 'react';
import '../styles/NavBar.scss';

const NavBar = ({setShow}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={()=> setShow(true)}>My Shopping</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span><i className="fas fa-cart-plus"></i></span>
          <span>0</span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar