import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
function App() {
  return (
<React.Fragment>
  <Nav />
  <Hero />
  <Services />
  <Tours />
  <Footer />
</React.Fragment>
  );
}

export default App;
