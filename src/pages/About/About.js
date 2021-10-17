import React from "react";
import { Col, Container } from "react-bootstrap";

import Menu from "../../component/Menu/Menu";

export default function About() {
  return (
    <div>
      <Menu />
      <Container>
        <Col md={12} xs={12}>
          <h4 style={{ marginTop: "2%" }}>About Project</h4>
          <ul>
            <li>This use reactjs</li>
            <li>
              This project use <a href="https://www.bmkg.go.id/"> BMKG </a> API
            </li>
            <li>This project use CSS/STYLED-COMPONENT for the style</li>
            <li>
              What Next For Code : Redux, Redux Middleware, Unit Testing ,
              Snapshoot and UI Kit Story
            </li>
            <li>What For Dev : Eslint, Linter, Setup CI CD</li>
          </ul>

          <br />
        </Col>
      </Container>
    </div>
  );
}
