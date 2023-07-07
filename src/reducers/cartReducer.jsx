import { createSlice } from "@reduxjs/toolkit";
import { calculateTotalAmount, calculateTotalItems } from "../utils/functions";

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCheckout: () => {
      return { ...initialState };
    },
    setCart: (state, action) => {
      return {
        ...state,
        cart: action.payload.cart,
        totalItems: action.payload.totalItems,
        totalAmount: action.payload.totalAmount,
      };
    },
    addItem: (state, action) => {
      const checkProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (checkProduct) {
        const tempCart = state.cart.map((product) => {
          if (
            product.id === action.payload.id &&
            action.payload.quantity > product.quantity
          ) {
            product.quantity++;
          }
          return product;
        });

        state.cart = [...tempCart];
      } else {
        state.cart.push({
          id: action.payload.id,
          price: action.payload.price,
          name: action.payload.name,
          quantity: 1,
          totalStock: action.payload.quantity,
        });
      }
      state.totalItems = calculateTotalItems(state.cart);
      state.totalAmount = calculateTotalAmount(state.cart);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    reduceItem: (state, action) => {
      const tempCart = state.cart.filter((product) => {
        if (product.id === action.payload.id) {
          if (product.quantity > 1) {
            product.quantity--;
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });

      state.cart = [...tempCart];
      state.totalItems = calculateTotalItems(state.cart);
      state.totalAmount = calculateTotalAmount(state.cart);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const tempCart = state.cart.filter((product) => {
        if (product.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });

      state.cart = [...tempCart];
      state.totalItems = calculateTotalItems(state.cart);
      state.totalAmount = calculateTotalAmount(state.cart);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { setCart, addItem, reduceItem, removeItem, setCheckout } =
  cartSlice.actions;
