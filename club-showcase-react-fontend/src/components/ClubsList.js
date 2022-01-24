import React from 'react';
import { deleteClubs } from '../actions/clubActions';
import { connect } from 'react-redux';

class ClubsList extends React.Component {


  handleShow(res) {
    window.location.replace(`http://localhost:4000/club/${res.id}`)
  }

  handleDelete(res) {
    let r = window.confirm("Are you sure you want to remove this club?");
    if (r === true) {
      this.props.deleteClubsWithDispatch(res)
    }
  }

  render() {
    return (
      this.props.clubs.map(club => 
        <div key={club.id} className="clubCard">
          

          <div>
          <h5 className="club-name-list-title"> <span className="club-name-list">{club.name}</span></h5>
          <h5 className="club-summary-list">Club Desctiption:</h5>
          <p className="club-summary-listing">{club.summary}</p>
          <br/>
            <button className="actionButton" onClick={() => this.handleShow(club)}> Club Details</button>
            <button className="actionButton" onClick={() => this.handleDelete(club)}>Delete</button>
          </div>
          
          <br/>
          <hr/>
        </div>)
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteClubsWithDispatch: (anyClubObject) => dispatch(deleteClubs(anyClubObject))
  }
} 

export default connect(null, mapDispatchToProps)(ClubsList);