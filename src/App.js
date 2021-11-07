import React, { Component, useRef, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import Wrapper from "./components/hoc/Wrapper";
import Filter from "./components/Filter/Filter";
import ProductsProvider from "./components/Provider/ProductsProvider";
import SearchBar from "./common/Search/Search";
const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />

        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
