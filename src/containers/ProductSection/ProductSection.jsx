import Filter from "../../components/filter";
import Product from "../../components/product";
import Order from "../../components/order";
import { SortWrapper, Wrapper } from "./Styles";
import { useSelector } from "react-redux";
const ProductSection = () => {
  const productsState = useSelector((state) => state.product);

  return (
    <Wrapper>
      <span>
        <h1>
          {productsState.categoryInfo.nameCategory === ""
            ? "All "
            : productsState.categoryInfo.nameCategory + " "}
          - {productsState.modifiedProducts.length} items
        </h1>
      </span>
      <span>
        <h1>Filter</h1>
        <h1>Order by</h1>
      </span>
      <SortWrapper>
        <Filter></Filter>
        <Order></Order>
      </SortWrapper>
      <Product></Product>
    </Wrapper>
  );
};

export default ProductSection;
