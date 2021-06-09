import React, { Component } from 'react';
import { faUser, faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from 'react-bootstrap';
import adidas from '../../images/adidas.svg';


class Nav2 extends Component {
  render() {
    return (
      <div className="navbar2 container-fluid">
        <div>
          <Row>
            <Col className="margin-search">
                <FontAwesomeIcon icon={faSearch} />
                <input  type="text" placeholder="Search" />
            </Col>

            <Col >
              <img src={adidas} alt="adidas"  height="70px"/>
            </Col>
            <Col className="fl nav2FontSize nav2Icons">
              <div >
                <span className="paddingRight"><FontAwesomeIcon icon={faShoppingCart} size="lg"/><span className="badge badge-danger">3</span>{' '}Cart</span>
                <span className="paddingRight"><FontAwesomeIcon icon={faHeart} size="lg"/>{' '}Wishlist </span>
                <span className="paddingRight"><FontAwesomeIcon icon={faUser} size="lg"/>{' '} Login</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Nav2;