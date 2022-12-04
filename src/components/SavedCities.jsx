import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class SavedCities extends React.Component {
  render() {
    return (
      <>
        <div>
          <Container id="container">
            <div>
              {" "}
              <p>City</p>
              <p>City</p>
              <p>City</p>
              <p>City</p>
              <p>City</p>
              <p>City</p>
            </div>
            <Row>
              <Link to="/">
                <Button id="seemore">Home</Button>
              </Link>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default SavedCities;
