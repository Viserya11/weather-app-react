import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


class MainPage extends React.Component {
    state = {
        isLoading: true,
        isError: false,
        weather: [],
      };
  
    async getLocations() {
      try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=8558a0f19eaefa322b298b94d7580a8c")
        if (response.ok) {
          const data  = await response.json()
          console.log(data)
        } else {
          alert('Error fetching results')
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    
    render() {
    return (
        <>
      <Container id="container">
       
            
          
        <input type="text" placeholder="Enter location..." />
        <div>  {/* {locations.map((locationData) => (
        <p>{locationData._id}</p>))} */}<h1 id="h1">10C</h1>
        <p id="city">City</p></div>
        <Row id="buttonrow"><Link to="/search"><Button id="seemore">See more</Button></Link><Button  id="searchbutton">Saved locations</Button></Row>
        
      </Container>
    
      </>
      )};
      
    
  }
  
  export default MainPage