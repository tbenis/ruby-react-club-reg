import React from 'react';

export default class Navigation extends React.Component {

    render () {
        return(
            <nav className="nav">
                <a className="aboutLink navLink" href="http://localhost:4000/about" style={{textAlign: "right"}}>About</a>
            </nav>
        )
    }

}