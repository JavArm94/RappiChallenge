import React from "react";
import ProductSection from "../ProductSection";
import Sidebar from "../../components/sidebar";
import { Wrapper } from "./Styled";

const MainSection = () => {
  return (
    <Wrapper>
      <Sidebar></Sidebar>
      <ProductSection></ProductSection>
    </Wrapper>
  );
};

export default MainSection;
