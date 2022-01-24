import React from 'react';

export default class Navigation extends React.Component {

    render () {
        return(
            <nav className="nav">
                <a className="clubsLink" href="http://localhost:4000/" style={{textAlign: "left"}}>Clubs</a>
                <a className="createClubLink" href="http://localhost:4000/clubs/new" style={{textAlign: "right"}}>Create Club</a>
            </nav>
        )
    }

}