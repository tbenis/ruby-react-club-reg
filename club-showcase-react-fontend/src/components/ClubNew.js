import React from "react";
import { connect } from "react-redux";
import { createClub } from "../actions/clubActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ClubNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      summary: null,
      date_founded: null,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      date_founded: date,
    });
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.createClubWithDispatch(this.state);
    window.location.replace(`http://localhost:4000/`);
  }

  render() {
    return (
      <>
        
        <form className="new-res" onSubmit={this.onFormSubmit}>
        <h2> Please Enter your Club's information below</h2>
          <label htmlFor="name" className="name-label">
            Club Name
          </label>
          <input
            className="input"
            name="name"
            className="name1 formBox"
            type="text"
            placeholder="Club Name"
            onChange={this.handleOnChange}
          />
          <label htmlFor="summary" className="summary-label">
            Summary
          </label>
          <textarea
            type="text"
            className="summary formBox"
            name="summary"
            onChange={this.handleOnChange}
            placeholder="Summary"
          />
          <label htmlFor="description" className="datepicker-label">
            Description:
          </label>
          <textarea
            type="text"
            className="description formBox"
            name="description"
            onChange={this.handleOnChange}
            placeholder="Description"
          />
          <label htmlFor="date" className="datepicker-label">
            Date:
          </label>
          <DatePicker
            id="date"
            className="datepicker formBox"
            selected={this.state.date_founded}
            onChange={this.handleDateChange}
            name="date"
            dateFormat="MM/dd/yyyy"
            placeholderText="Date Founded"
          />{" "}
          <button type="submit" className="add-club-button">
            Add Club
          </button>
        </form>
        <br />
        <hr />
        <hr />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    description: state.description,
    summary: state.summary,
    date_founded: state.dateCreated,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createClubWithDispatch: (userInput) => dispatch(createClub(userInput)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubNew);
