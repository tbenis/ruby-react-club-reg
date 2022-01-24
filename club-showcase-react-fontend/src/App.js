import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { fetchClubs } from "./actions/clubActions";

import Navigation from "./components/Navigation.js";

import ClubsList from "./components/ClubsList";
import ClubNew from "./components/ClubNew";
import Footer from "./components/Footer";
import Club from "./components/Club";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="app-header">
            <Navigation />
          </header>
          <Route exact path="/" render={(routerProps) => (
              <ClubsList {...routerProps} clubs={this.props.clubs} />
            )}
          />
          <Route path="/club/:id" render={(routerProps) => (
              <Club {...routerProps} club={this.props.club} />
            )}
          />
        </div>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clubs: state.clubsReducer.clubs,
    club: state.clubsReducer.club,
    loading: state.clubsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClubsWithDispatch: () => dispatch(fetchClubs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
