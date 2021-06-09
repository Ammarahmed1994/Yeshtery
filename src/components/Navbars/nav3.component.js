import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';

class Nav3 extends Component {
  render() {
    return (
      <div className="navbar3 ">
        <div className="container-fluid">
  <Navbar>
  <ul className="nav3Ul">
  <li className="nav3Li">Men</li>
  <li className="nav3Li">Women</li>
  <li className="nav3Li">UniSex</li>
  <li className="nav3Li">Kids</li>
  <li className="nav3Li">Best Sellers</li>
  <li className="nav3Li">New Arrivals</li>
  <li className="nav3Li">Offers</li>
</ul>
  
  </Navbar>
  </div>
      </div>
    );
  }
}

export default Nav3;