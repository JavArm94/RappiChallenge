import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  position: sticky;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  background-color: white;
  padding-top: 25px;
  margin-left: 50px;
  overflow: hidden;

  ul {
    text-align: left;
    padding: 5px 0px 5px 10px;
    cursor: pointer;
    margin: 0;
  }

  div {
    width: 80%;
    border: 2px #d9d9d9 solid;
    border-radius: 10px;
    padding: 10px 20px;
  }

  h1 {
    margin: 20px;
  }

  hr {
    margin: 0px 5px;
    border: solid 1px #d9d9d9;
  }

  span {
    display: flex;
    justify-content: space-between;

    img {
      max-height: 10px;
    }
  }
`;
