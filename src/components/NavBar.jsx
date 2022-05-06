import React from 'react';
import '../styles/NavBar.scss';

const NavBar = ({setShow, quantity}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={()=> setShow(true)}>My Shopping</span>
        <div className="cart" onClick={() => setShow(false)}>
          <span><i className="fas fa-cart-plus"></i></span>
          <span>{quantity}</span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar