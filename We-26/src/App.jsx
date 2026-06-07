import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Background } from "./components/Background/Background";
import { Home } from "./components/Home/Home";
import { MainSection } from "./components/Main/MainSection/MainSection";

function App() {
  return (
    <>
      <Background></Background>
      <main>
        <Header></Header>
        <Home></Home>
        <MainSection></MainSection>
      </main>
    </>
  );
}

export default App;
