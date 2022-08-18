import React from "react";
import "./style.css";
import Nav from './Nav';
import Header from './Header';
import About from './About';
import ProductContainer from './ProductContainer';

export default function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <ProductContainer />
    </div>
  );
}
