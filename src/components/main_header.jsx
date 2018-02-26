import React from 'react';
import {Component} from 'react';

// Styles
import '../styles/main-view-styles.css';


class Template extends Component {

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div className="main-header-content">
        <h1 className="main-header-logo">C</h1>
        <div>
          <h1 className="main-header-title">CRYPTO</h1>
          <h1 className="main-header-title">CURRENTLY</h1>
        </div>
      </div>
    );
  }
}


export default Template;


//
// <h1 className="main-header-title">Crypto</h1>
// <br/>
// <h1 className="main-header-title">Currently</h1>


// <h1 className="main-header-title">CRYPTO | currently</h1>
