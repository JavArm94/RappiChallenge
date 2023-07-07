import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./Styles";
import { setCart } from "../../reducers/cartReducer";
import { useNavigate, useLocation } from "react-router-dom";
import iconCart from "../../assets/icons/icon-cart.png";
import iconHome from "../../assets/icons/icon-home.png";

const Navbar = () => {
  const cartState = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNav = () => {
    if (location.pathname === "/") {
      navigate("/cart");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchCart = () => {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem(
          "cart",
          JSON.stringify({ cart: [], totalItems: 0, totalAmount: 0 })
        );
      }
      dispatch(setCart(JSON.parse(localStorage.getItem("cart"))));
    };
    fetchCart();
  }, []);

  return (
    <Wrapper>
      <button onClick={handleNav}>
        <img
          src={location.pathname === "/" ? iconCart : iconHome}
          alt="icon-cart"
        />
      </button>
      <span>Items: {cartState.totalItems}</span>
      <span>Total: {cartState.totalAmount}</span>
    </Wrapper>
  );
};

export default Navbar;
