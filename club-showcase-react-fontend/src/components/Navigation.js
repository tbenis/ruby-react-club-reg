import React from 'react';

export default class Navigation extends React.Component {

    render () {
        return(
            <nav className="nav">
                <a className="clubsLink navLink" href="http://localhost:4000/" style={{textAlign: "left"}}>Clubs</a>
                <a className="createClubLink navLink" href="http://localhost:4000/clubs/new" style={{textAlign: "right"}}>Create Club</a>
                <a className="aboutLink navLink" href="http://localhost:4000/about" style={{textAlign: "right"}}>About</a>
            </nav>
        )
    }

}