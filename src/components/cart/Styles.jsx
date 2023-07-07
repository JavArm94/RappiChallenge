import styled from "styled-components";

export const CartSection = styled.div`
  margin: 0px 100px;
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  span {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    border-top: 2px solid #d9d9d9;
    border-bottom: 2px solid #d9d9d9;

    h2:nth-child(1) {
      border-right: 2px solid #d9d9d9;
    }

    h2:nth-child(2) {
      border-right: 2px solid #d9d9d9;
    }
  }

  section {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    border-bottom: 2px solid #d9d9d9;
    div:nth-child(1) {
      display: flex;
      justify-content: flex-start;
      padding: 20px 0px;
      padding-left: 100px;
      column-gap: 20px;

      button {
        background-color: #e47070;
        color: white;
      }

      div {
        height: 50px;
        width: 50px;
        padding: 20px;
        background-color: #ffa7a7;
        border: solid 3px #ff9d9d;
        border-radius: 20px;
        color: white;
        font-size: 0.8rem;
      }
    }

    div:nth-child(2) {
      font-size: 2rem;
      font-weight: bold;

      button {
        appearance: none;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 20px;
        margin: 20px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  div:last-child {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 50px 0px;

    button {
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 30px;
      padding: 40px;
      border: 2px solid #f9f9f9;
      outline: none;
    }

    button:hover {
      border: 2px solid #d9d9d9;
    }
  }
`;
