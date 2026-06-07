import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Background } from "./components/Background/Background";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Background></Background>
      <Home></Home>
    </>
  );
}

export default App;
