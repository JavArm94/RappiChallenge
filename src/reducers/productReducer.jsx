import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products.json";

const productsFormated = products.map((item) => {
  return {
    ...item,
    price: parseInt(item.price.substring(1).replace(",", "")),
  };
});

const initialState = {
  categoryInfo: {
    activeCategory: 0,
    nameCategory: "",
  },
  order: {
    orderOption: "price",
    orderCriteria: "asc",
  },
  products: products,
  modifiedProducts: productsFormated,
  filter: {
    availability: null,
    priceRange: 0,
    stockRange: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.categoryInfo.activeCategory = action.payload.activeCategory;
      state.categoryInfo.nameCategory = action.payload.name;
    },
    setFilterProducts: (state, action) => {
      state.modifiedProducts = [...productsFormated];

      state.modifiedProducts = state.modifiedProducts
        .filter(
          (item) =>
            (item.available === action.payload.availability ||
              action.payload.availability === null) &&
            item.price <= action.payload.priceRange &&
            item.quantity <= action.payload.stockRange &&
            (item.sublevel_id === state.categoryInfo.activeCategory ||
              state.categoryInfo.activeCategory === 0)
        )
        .sort((a, b) =>
          state.order.orderCriteria === "asc"
            ? a[state.order.orderOption] - b[state.order.orderOption]
            : b[state.order.orderOption] - a[state.order.orderOption]
        );

      state.filter = action.payload;
    },
    setOrderProducts: (state, action) => {
      state.order = action.payload;
      state.modifiedProducts.sort((a, b) =>
        state.order.orderCriteria === "asc"
          ? a[state.order.orderOption] - b[state.order.orderOption]
          : b[state.order.orderOption] - a[state.order.orderOption]
      );
    },
    setFilterSearch: (state, action) => {
      state.modifiedProducts = [...productsFormated];

      state.modifiedProducts = state.modifiedProducts
        .filter(
          (item) =>
            (item.available === state.filter.availability ||
              state.filter.availability === null) &&
            item.price <= state.filter.priceRange &&
            item.quantity <= state.filter.stockRange &&
            (item.sublevel_id === state.categoryInfo.activeCategory ||
              state.categoryInfo.activeCategory === 0)
        )
        .sort((a, b) =>
          state.order.orderCriteria === "asc"
            ? a[state.order.orderOption] - b[state.order.orderOption]
            : b[state.order.orderOption] - a[state.order.orderOption]
        );

      if (action.payload) {
        state.modifiedProducts = state.modifiedProducts.filter((item) =>
          item.name.toLowerCase().includes(action.payload)
        );
      }
    },
  },
});

export default productSlice.reducer;
export const {
  setActiveCategory,
  setFilterProducts,
  setOrderProducts,
  setFilterSearch,
} = productSlice.actions;
