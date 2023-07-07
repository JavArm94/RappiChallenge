import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderProducts } from "../../reducers/productReducer";
import { Wrapper, SelectContainer } from "./Styles";

const Order = () => {
  const dispatch = useDispatch();
  const orderOption = ["price", "quantity"];
  const orderCriteria = ["asc", "desc"];
  const [order, setOrder] = useState({
    orderOption: orderOption[0],
    orderCriteria: orderCriteria[1],
  });

  useEffect(() => {
    dispatch(setOrderProducts(order));
  }, [order, dispatch]);

  return (
    <Wrapper>
      <SelectContainer>
        <select
          value={order.orderOption}
          onChange={(e) => setOrder({ ...order, orderOption: e.target.value })}
        >
          {orderOption.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={order.orderCriteria}
          onChange={(e) =>
            setOrder({ ...order, orderCriteria: e.target.value })
          }
        >
          {orderCriteria.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </SelectContainer>
    </Wrapper>
  );
};

export default Order;
