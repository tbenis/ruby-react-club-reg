import React from 'react';
import { getClub } from '../actions/clubActions';
import { connect } from 'react-redux';

class Club extends React.Component {

  componentDidMount() {    
    this.props.getClubWithDispatch(this.props.match.params.id)
  }
  render() {
    if (this.props) {
      return (
        <>
        <br /><br /><br />
        <div className="old-res">
          <h5 className="club-name">{this.props.club.name}</h5>
           <br /> <br /> 

          <h5 className="club-description">Club Desctiption:</h5>
           
           <br/><p className="descibing">{this.props.club.description}</p> 
        </div>  

        <br /><br /><br />
        </>      
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    club: state.clubsReducer.club,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getClubWithDispatch: (id) => dispatch(getClub(id))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Club);