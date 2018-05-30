import React, {Component} from 'react';
import './../style/TourCard.css'

import axios from 'axios'

class TourCard extends Component {
  constructor() {
    super();
    this.state = {name: 'Bangka Belitung', description: 'Bangka Belitung is...'};
  }
    render() {
        return(
            <div className="tourcard">
              <img src={require('./../img/mount-merapi-113620.jpg')} alt="" height="200px" width="400px" />
              <br />
              <br />                                    
              <br />                                                                                      
              <h4>{this.state.name}</h4>
              <p>{this.state.description}</p>
            </div>
        )
    }
}

export default TourCard;