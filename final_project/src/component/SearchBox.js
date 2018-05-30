import React, { Component } from 'react';
import './../style/SearchBox.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {Button} from 'primereact/components/button/Button';


class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            city: null, 
        };
        
        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

  render() {
    var cities = [
        {name: 'Banten', code: 'SRG'},
        {name: 'Jawa Barat', code: 'BDG'},
        {name: 'Jawa Tengah', code: 'SMG'},
        {name: 'Yogyakarta', code: 'JOG'},
        {name: 'Jawa Timur', code: 'SBY'}
    ];

    return (
      <div className="searchbox">
        <div className="searchboxcomponent">
            <div className="row">
                <div className="col">
                    <h6>Destination</h6>                
                    <Dropdown optionLabel="name" value={this.state.city} options={cities} onChange={this.onCityChange} style={{width:'150px'}} placeholder="Select a Province"/>
                </div>
                <div className="col">                
                    <h6>From</h6>
                    <Calendar onChange={()=>{}}></Calendar>
                </div>
                <div className="col">                
                    <h6>To</h6>
                    <Calendar onChange={()=>{}}></Calendar>
                </div>
                <div className="col">         
                    <br />       
                    <Button label="Search" className="ui-button-info"></Button>
                </div>
            </div>
        </div>        
      </div>
    );
  }
}

export default SearchBox;
