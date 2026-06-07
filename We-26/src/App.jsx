import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Background } from "./components/Background/Background";

function App() {
  return (
    <>
      <Header></Header>
      <Background></Background>
    </>
  );
}

export default App;
