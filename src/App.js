import React, { Fragment, useState } from "react";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (list) => {
    setCart([...cart, list]);
    console.log(cart);
  };

  const handleChange = (list, d) => {
    const ind = cart.indexOf(list);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }

  return (
    <Fragment>
      <NavBar setShow={setShow} />
      {show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
    </Fragment>
  );
};

export default App;
