import React, { Component } from "react";
import React, { Component } from 'react';


export default class About extends Component {
  render() {
    return (
        <h3 className="about-title">About me </h3>
        <p className="about-subtitle"> Hi there! My name is Benis</p>
        <p className="about-p1">
          I am currently a student at the Unniversity of Maryland, College Park
          studying Information Science (major), Computer Science (minor), and
          Techology Entreprenuership (minor).
        </p>
        <p className="about-p1">
          I built this app to simply learn and demonstrate my react + redux
          knowledge. However, I plan to build a larger full-stack react project
          next.{" "}
        </p>
        <p className="about-p1">
          I my free time, I enjoy travellig, photography, binge-watching tthe
          office, and love mentoring highschool students gettig into tech (
          <a
            target="_blank"
            href={"https://www.youtube.com/watch?v=ti-VLxpexYI&t=127s"}>
            {" "}
            Check out this intro to Web Dev workshop I led recently{" "}
          </a>
          ).
        </p>
    );
  }
}
