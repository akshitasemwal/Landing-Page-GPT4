import React from "react";

import { Article, Brand, CTA, Feature, Navbar } from "./components";
import {
  Blog,
  Features,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
} from "./containers";
//we wont be importing our containers straight inside the app, but inside of our containers
//components folder store smaller components
//containers folder contains bigger components/multiple components together

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
