import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class MainPage extends React.Component {
  state = {
    isLoading: true,
    isError: false,
    cities: [],
    input: "",
  };

  async getLocations(query) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=8558a0f19eaefa322b298b94d7580a8c&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ ...this.state, cities: data });
        console.log(this.state);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getLocations("Budapest");
  }

  render() {
    return (
      <>
        <Container id="container">
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => {
              this.setState({ ...this.state, input: e.target.value });
            }}
            placeholder="Enter location..."
          />
          <Button
            id="searchbutton"
            onClick={() => {
              this.getLocations(this.state.input);
            }}
          >
            Search
          </Button>

          <div>
            <div className="flexweather">
              
              <h1 id="h1">{this.state.cities?.main?.temp}C</h1>{" "}
              {this.state.cities?.weather?.map((weather) => (
                <img id="weatherlogo" attribute title={weather.description} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}></img>
              ))}
            </div>
            <p id="city">{this.state.cities.name}</p>
          </div>

          <Row id="buttonrow">
            <Link to="/saved">
              <Button id="seemore">Saved Locations</Button>
            </Link>
          </Row>
        </Container>
      </>
    );
  }
}

export default MainPage;
