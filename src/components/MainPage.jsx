import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import {Link} from "react-router-dom";


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Button variant="primary">Search</Button>
        <div>City</div>
        <div>Temperature</div>
        <div>
            <Link to='saved'>
            <Button>Saved Locations</Button></Link></div>
      </div>
    );
  }
}

export default MainPage;
