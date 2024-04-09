import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/features/header/Header";
import Main from "./components/features/main/Main";
import { ContainerApp } from "./styles";

function App() {
  return (
    <ContainerApp>
      <Header />
      <Main />
      <GlobalStyle />
    </ContainerApp>
  );
}

export default App;
