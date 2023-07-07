import styled from "styled-components";

export const StyledUl = styled.ul`
  width: max-content;
  color: ${(p) => (p.active ? "#ffffff" : "#000000")};
  background-color: ${(p) => (p.active ? "#213547" : "none")};
  font-weight: bold;
  border-radius: 30px;
  border: #ffffff 1px solid;
  padding: 10px 20px !important;
  margin: 10px 0px !important;

  :hover {
    border: ${(p) => (p.active ? "" : "#213547 1px solid")};
  }
`;
