import React, { Component } from 'react';
import img from '../resources/271241155_4032488000187907_8568352687997775638_n.jpeg'

export default class AboutImage extends Component {


    render() {
        return (
            <img className="about-image" src={img} alt={this.props.alt} style={{height: "400px"}} />
        )
    } 
}