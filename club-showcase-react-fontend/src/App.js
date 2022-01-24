import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation.js";

import ClubsList from "./components/ClubsList";
import ClubNew from "./components/ClubNew";
import Footer from "./components/Footer";
import Club from "./components/Club";
class App extends Component {
  render() {
    return (
            <Navigation />
        <Footer />
    );
  }
}

export default App
