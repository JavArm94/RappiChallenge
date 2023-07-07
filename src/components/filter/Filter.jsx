import { useEffect, useState } from "react";
import { maxRangeValue } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCategory,
  setFilterProducts,
} from "../../reducers/productReducer";
import { Wrapper, InputRange, ButtonContainer } from "./Styles";

const Filter = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.product);
  const maxValueStock = maxRangeValue(productsState.products, "quantity");
  const maxValuePrice = maxRangeValue(productsState.products, "price");

  const resetFilter = () => {
    dispatch(
      setFilterProducts({
        availability: null,
        priceRange: maxValuePrice.roundedNumber,
        stockRange: maxValueStock.roundedNumber,
      })
    );
    dispatch(setActiveCategory({ activeCategory: 0, name: "" }));
  };

  useEffect(() => {
    dispatch(setFilterProducts(productsState.filter));
  }, [productsState.filter, productsState.categoryInfo.activeCategory]);

  useEffect(() => {
    if (
      productsState.filter.priceRange === 0 &&
      productsState.filter.stockRange === 0
    ) {
      resetFilter();
    }
  }, []);

  return (
    <Wrapper>
      <InputRange>
        <label htmlFor="range-price"> {productsState.filter.priceRange}</label>
        <input
          id="range-price"
          type="range"
          min={0}
          max={maxValuePrice.roundedNumber}
          value={productsState.filter.priceRange}
          step={maxValuePrice.roundedNumber / maxValuePrice.steps}
          onChange={(e) =>
            dispatch(
              setFilterProducts({
                ...productsState.filter,
                priceRange: e.target.value,
              })
            )
          }
        ></input>
      </InputRange>
      <InputRange>
        <label htmlFor="range-stock">{productsState.filter.stockRange}</label>
        <input
          id="range-stock"
          type="range"
          min={0}
          max={maxValueStock.roundedNumber}
          value={productsState.filter.stockRange}
          step={maxValueStock.roundedNumber / maxValueStock.steps}
          onChange={(e) =>
            dispatch(
              setFilterProducts({
                ...productsState.filter,
                stockRange: e.target.value,
              })
            )
          }
        ></input>
      </InputRange>
      <ButtonContainer>
        <button
          onClick={() => {
            dispatch(
              setFilterProducts({
                ...productsState.filter,
                availability:
                  productsState.filter.availability === null
                    ? true
                    : !productsState.filter.availability,
              })
            );
          }}
        >
          Availability
        </button>
        <button onClick={resetFilter}>Reset</button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Filter;
