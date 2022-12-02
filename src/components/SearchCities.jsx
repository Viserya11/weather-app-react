import React from "react";
import {Button} from 'react-bootstrap'

class SearchCities extends React.Component {
    render() {
      return (
        <div>
          <input type="text" />
          <Button variant="info">Search</Button>
          <div><p>city</p><Button>Save</Button></div>
        </div>
      );
    }
  }
  
  export default SearchCities;