import React, {Component} from 'react';
import './../style/PosterUtama.css';

// https://p.w3layouts.com/demos_new/template_demo/12-04-2018/transco-demo_Free/560544429/web/index.html
// http://themes.iamabdus.com/star/1.3/index.html
// http://landing.engotheme.com/html/skyline/

class PosterUtama extends Component {
    render() {
        return(
            <div className="PosterUtama">
                <div className="poster-utama">
                    {/* <img src={require('./../img/sutirta-budiman-527416-unsplash.jpg')} alt="" height="600px" width="100%" />   */}
                    <img src={require('./../img/mount-merapi-113620.jpg')} alt="" height="700px" width="100%" />                      
                </div>
                <div className="judulwebsite">
                    <p>Travelino</p>
                </div>
                <div className="subjudulwebsite">
                    <p>First online marketplace for open trip in Indonesia. Let us bring you to the new level of travelling.</p>
                </div>
            </div>
        )
    }
}

export default PosterUtama;