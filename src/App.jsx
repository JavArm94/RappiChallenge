import "./App.css";
import { createGlobalStyle } from "styled-components";
import MainSection from "./containers/MainSection/MainSection";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

const GlobalStyle = createGlobalStyle`
body{
  min-height: 100vh;  
  width: 100%;
  margin: auto;
}
`;
function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainSection></MainSection>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
