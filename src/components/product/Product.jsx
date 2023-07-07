import { useDispatch, useSelector } from "react-redux";
import { CardProduct, ContainerProducts, CartStatus } from "./Styles";
import { addItem } from "../../reducers/cartReducer";
import iconCart from "../../assets/icons/icon-card-cart.png";

const Product = () => {
  const productsState = useSelector((state) => state.product);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkForMatch = (objectsArray, targetId) => {
    for (let i = 0; i < objectsArray.length; i++) {
      if (objectsArray[i].id === targetId) {
        return true;
      }
    }
    return false;
  };

  const checkForQuantity = (objectsArray, targetId) => {
    for (let i = 0; i < objectsArray.length; i++) {
      if (objectsArray[i].id === targetId) {
        return objectsArray[i].quantity;
      }
    }
    return false;
  };

  return (
    <ContainerProducts>
      {productsState.modifiedProducts.map((product) => {
        const { available, quantity, name, price, id } = { ...product };

        return (
          <CardProduct key={id} available={available}>
            <h1>{name}</h1>

            {available ? (
              <>
                {checkForMatch(cartState.cart, id) && (
                  <CartStatus>
                    <img src={iconCart} alt=""></img>
                    <span>{checkForQuantity(cartState.cart, id)}</span>
                  </CartStatus>
                )}

                <p>${price}</p>
                <p>stock:{quantity}</p>
                <button
                  onClick={() =>
                    dispatch(
                      addItem({
                        id,
                        price,
                        quantity,
                        name,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </>
            ) : (
              <>
                <p>${price}</p>
                <p>No available</p>
              </>
            )}
          </CardProduct>
        );
      })}
    </ContainerProducts>
  );
};

export default Product;
