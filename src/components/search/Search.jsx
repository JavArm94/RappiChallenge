import React, { useRef } from "react";
import { setFilterSearch } from "../../reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { formatSearchInput } from "../../utils/functions";
import { InputSearch } from "./Styles";
const Search = () => {
  const searchInputRef = useRef(null);
  const activeCategory = useSelector(
    (state) => state.product.categoryInfo.activeCategory
  );
  const dispatch = useDispatch();

  const handleSearch = () => {
    const searchInput = formatSearchInput(searchInputRef.current.value);
    dispatch(setFilterSearch(searchInput));
  };

  return (
    <InputSearch
      type="text"
      ref={searchInputRef}
      onChange={() => handleSearch()}
      placeholder={
        activeCategory === 0 ? "Choose a category to search" : "Ready to search"
      }
      disabled={activeCategory === 0}
    />
  );
};

export default Search;
