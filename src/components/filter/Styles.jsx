import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;

  button {
    background-color: #d9d9d9;
    border-radius: 30px;
    color: #fffef1;
    font-size: 1.3rem;
  }
`;

export const InputRange = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-left: 10px;

  span {
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    padding-bottom: 20px;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #e0e0e0;
    outline: none;
    background-color: #7a7a7a;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #7a7a7a;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #7a7a7a;
    cursor: pointer;
  }

  input[type="range"]::-ms-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #7a7a7a;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-left: 30px;
  gap: 30px;

  button {
    border: none;
    outline: none;
  }

  button:active {
    outline: none;
  }
`;
