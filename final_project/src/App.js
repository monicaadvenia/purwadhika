import React, { Component } from 'react';
import './App.css'

import Header from './component/Header';
import Footer from './component/Footer';
import PosterUtama from './component/PosterUtama';
import SearchBox from './component/SearchBox';
import Tours from './component/Tours';

import CobaMaterialUI from './component/CobaMaterialUI'

import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>

          <PosterUtama>
          </PosterUtama>

          <div className="searchboxlocation">
              <SearchBox></SearchBox>
          </div>

          <div id="whoarewe">
            <div className="whoarewecontent">
              <h3>Who are we?</h3>
              <p>Travelino is the first open trip marketplace in Indonesia. On this website, you can find varios trip/tours offered from various people, range from big travel agent to a person who just loves bring people to Indonesian hinland. On this website, we assured you that all of travel agents are trusted. So what are you waiting! Let's dive to Indonesian beauty!</p>  
            </div>
          </div>

          <div id="tours">
            <h3>TOURS</h3>
            <Tours></Tours>
          </div> 

          <div id="faq">
            <h3>FAQ</h3>
              <Accordion> 
                <AccordionTab header="What'is Travelino?">
                    Travelino is the first open trip marketplace in Indonesia. 
                    On this website, you can find varios trip/tours offered from various people, range from big travel agent to a person who just loves bring people to Indonesian hinland.
                </AccordionTab>
                <AccordionTab header="Can I trust the travel agents?">
                    Yes, we can assured you that all our travel agents are trusted. Before they appear on this website, we took several checks. 
                </AccordionTab>
                <AccordionTab header="How I book the tour?">
                    Choose your destination on Tours Menu, then you can select whatever tours you want.
                </AccordionTab>
            </Accordion>
          </div>
            
          <Footer></Footer>     
          <CobaMaterialUI></CobaMaterialUI>       
      </div>
    );
  }
}

export default App;
