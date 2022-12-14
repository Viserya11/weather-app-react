import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



export default function SavedCities() {
  const cities = useSelector((state) => state);
  const dispatch = useDispatch()
  const arr = []
  console.log(cities)
  return (
    <div>
    <Container id="container">
      <div>
        {cities.map((city) => { if (!arr.includes(city.name)) {
          arr.push(city.name) 
          return <><p className="savedcard"><p>{city.name} <h5>{city.main.temp}C</h5></p>  <Button id="searchbutton" onClick={(e) => {dispatch({type: "REMOVE_CITY", payload: city.name})}}>Remove</Button> </p></>}
        })}
        
      </div>
      <Row>
        <Link to="/">
          <Button id="seemore">Home</Button>
        </Link>
      </Row>
    </Container>
  </div>
  )
}
