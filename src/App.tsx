import React from "react";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Main } from "./components/Main/Main";
import { VStack } from "@chakra-ui/react";

export const App = () => {
  return (
    <VStack spacing={2}>
      <Logo />
      <Main />
      <Footer/>      
    </VStack>
  )
}

export default App;
