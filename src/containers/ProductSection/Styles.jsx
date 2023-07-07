import styled from "styled-components"

export const SortWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 0;
  background-color: #ffffff;
`

export const Wrapper = styled.section`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 70px;

  span {
    display: flex;
    width: 100%;
    justify-content: space-between;

    h1 {
      margin-top: 1.4rem;
      margin-bottom: 0.8rem;
    }
  }
`
