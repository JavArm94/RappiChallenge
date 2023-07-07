import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: right;

  span {
    font-weight: bold;
    font-size: 1.8rem;
    padding-right: 20px;
  }

  select {
    text-transform: capitalize;
    background-color: #d9d9d9;
    border-radius: 30px;
    color: #fffef1;
    font-size: 1.3rem;
    text-align: center;
    padding: 12px;
    border: none;
    outline: none;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
