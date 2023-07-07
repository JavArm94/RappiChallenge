import React, { useState } from "react";
import { StyledUl } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../reducers/productReducer";
import iconDropdown from "../../assets/icons/icon-dropdown.png";

const Menu = ({ categories = "" }) => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.product);
  const [toggle, setToggle] = useState(false);

  const checkRemainCategories = (e, objectCategory) => {
    e.stopPropagation();
    if (objectCategory.hasOwnProperty("sublevels")) {
      setToggle(!toggle);
    } else {
      dispatch(
        setActiveCategory({
          activeCategory: objectCategory.id,
          name: objectCategory.name,
        })
      );
    }
  };

  if (categories.hasOwnProperty("sublevels")) {
    return (
      <ul
        onClick={(e) => {
          checkRemainCategories(e, categories);
        }}
      >
        <span>
          <p>{categories.name}</p>
          <p>
            <img
              src={iconDropdown}
              alt=""
              style={{ transform: toggle ? "none" : "rotate(270deg)" }}
            />
          </p>
        </span>
        {toggle &&
          categories.sublevels.map((category) => {
            return <Menu key={category.id} categories={category}></Menu>;
          })}
      </ul>
    );
  } else {
    return (
      <StyledUl
        onClick={(e) => {
          checkRemainCategories(e, categories);
        }}
        active={productsState.categoryInfo.activeCategory === categories.id}
      >
        {categories.name}
      </StyledUl>
    );
  }
};

export default Menu;
