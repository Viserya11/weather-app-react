import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  render() {
    return (
      <>
        <div>
          <input type="text" />
          <Button variant="primary">Search</Button>
          <div>City</div>
          <div>Temperature</div>
          
        </div>

        <div><Link to="./search"><Button>See more</Button></Link>
          <Link to="./saved">
            
            <Button>Saved Locations</Button>
          </Link>
        </div>
      </>
    );
  }
}

export default MainPage;
