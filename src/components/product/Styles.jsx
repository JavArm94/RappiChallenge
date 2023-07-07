import styled from "styled-components";

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.available ? "#FFA7A7" : "#FF6A6A")};
  min-width: fit-content;
  color: #ffffff;
  border-radius: 50px;
  position: relative;
  height: 250px;
  width: 100%;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  border: 3px solid ${(p) => (p.available ? "#ff9d9d" : "#FF7B7B")};

  h1 {
    margin: 10px;
    font-size: 1.4rem;
  }

  p {
    margin: 10px;
    font-size: 1rem;
  }

  button {
    border-radius: 30px;
    border: none;
    outline: none;
    margin-top: 10px;
    font-size: 1rem;
  }
`;

export const CartStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9d9d;
  width: 70px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 0px 50px 0px 10px;
  border-top: 3px solid #ffe4e4;
  border-right: 3px solid #ffe4e4;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  margin: -3px;

  img {
    height: 30px;
    width: 30px;
    padding-left: 5px;
  }
  span {
    padding-left: 5px;
  }
`;

export const ContainerProducts = styled.section`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding-top: 20px;
`;
