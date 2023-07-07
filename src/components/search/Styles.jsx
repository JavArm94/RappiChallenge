import styled from "styled-components";

export const InputSearch = styled.input`
  font-size: 0.7rem;
  border-radius: 30px;
  padding: 10px 0px;
  background-color: white;
  margin: 12px auto;
  width: 90%;
  text-indent: 10px;
  border: solid 2px #d9d9d9;
  outline: none;

  :disabled {
    background-color: #d9d9d9;
    border: solid 2px white;
  }
`;
