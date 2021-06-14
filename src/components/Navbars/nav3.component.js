import React, { Component } from 'react';
import { Navbar} from 'react-bootstrap';

class Nav3 extends Component {
  render() {
    return (
      <div className="navbar3 container-fluid">
  <Navbar>
  <ul className="nav3Ul">
  <li>Men</li>
  <li>Women</li>
  <li>UniSex</li>
  <li>Kids</li>
  <li>Best Sellers</li>
  <li>New Arrivals</li>
  <li className="offer">Offers</li>
</ul>
  
  </Navbar>
  </div>
    );
  }
}

export default Nav3;