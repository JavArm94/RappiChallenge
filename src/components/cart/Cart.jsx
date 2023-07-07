import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  reduceItem,
  removeItem,
  setCart,
  setCheckout,
} from "../../reducers/cartReducer";
import { todayDate } from "../../utils/functions";
import { CartSection } from "./Styles";

const Cart = () => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const checkout = () => {
    const cartContent = JSON.parse(localStorage.getItem("cart"));

    if (!localStorage.getItem("history")) {
      localStorage.setItem("history", JSON.stringify({ history: [] }));
    }
    const actualHistory = JSON.parse(localStorage.getItem("history"));
    actualHistory.history.push({ date: todayDate(), checkout: cartContent });
    localStorage.setItem("history", JSON.stringify(actualHistory));
    localStorage.removeItem("cart");
    dispatch(setCheckout());
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

  if (cartState.totalItems === 0) {
    return (
      <div>
        <h1>Cart is empty.</h1>
      </div>
    );
  }

  return (
    <div>
      <CartSection>
        <header>
          <h1>Your cart</h1>
          <h1>${cartState.totalAmount}</h1>
        </header>
        <span>
          <h2>Item</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
        </span>
        {cartState.cart.map((item) => {
          const { id, price, quantity, totalStock, name } = item;

          return (
            <section key={id}>
              <div>
                <button onClick={() => dispatch(removeItem({ id }))}>X</button>
                <div>{name}</div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati distinctio eos laboriosam, placeat aliquid unde vero
                  natus cum nobis fugiat nam inventore quam accusantium
                  consequuntur consequatur eum adipisci odit dolore.
                </p>
              </div>
              <div>
                <button onClick={() => dispatch(reduceItem({ id }))}>-</button>
                {quantity}
                {quantity < totalStock && (
                  <button
                    onClick={() =>
                      dispatch(addItem({ id, price, quantity: totalStock }))
                    }
                  >
                    +
                  </button>
                )}
              </div>
              <h2>${price * quantity}</h2>
            </section>
          );
        })}

        {cartState.totalItems > 0 && (
          <div>
            <button onClick={() => checkout()}>Checkout</button>
          </div>
        )}
      </CartSection>
    </div>
  );
};

export default Cart;
