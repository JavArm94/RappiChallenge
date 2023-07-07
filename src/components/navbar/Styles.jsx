import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  min-height: 100px;
  font-size: 1rem;
  font-weight: bold;
  align-items: center;
  justify-content: flex-end;
  background-color: #dcf6ff;
  padding: 0 100px;
  column-gap: 20px;

  img {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    padding: 25px;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
  }

  button:hover {
    background-color: darkblue;
    img {
      filter: brightness(0) invert(1);
    }
  }
`;
