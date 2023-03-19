import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SeasonsPage from "./SeasonsPage";
import NotFoundPage from "./NotFoundPage";
import Navigation from "./Navigation";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <Router>
            <div>
            <Navigation />
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/seasons" Component={SeasonsPage} />
                <Route path="/profile" Component={NotFoundPage} />
            </Routes>
            </div>
          </Router>
      </ChakraProvider>
  );
}

export default App;