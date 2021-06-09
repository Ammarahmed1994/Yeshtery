import React, { Component } from 'react';
import { faBars, faMapMarkerAlt, faChevronLeft, faChevronRight, faPhoneAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Row, Col } from 'react-bootstrap';


class Nav1 extends Component {
  render() {
    return (
      <div className="navbar1 container-fluid">
        <div>
          <Row>
            <Col>
              <Navbar.Brand ><FontAwesomeIcon icon={faBars} />{' '} yeshtery</Navbar.Brand>
            </Col>
            <Col className="fontSize">
              <FontAwesomeIcon icon={faChevronLeft} />{' '} Valentine's Day Offers! Buy Two Get One Free <span className="spanUnderLine">Shop Now</span> {' '}  <FontAwesomeIcon icon={faChevronRight} />
            </Col>
            <Col className="fl fontSize">
              <div >
                <span className="paddingRight"><FontAwesomeIcon icon={faPhoneAlt} />{' '}Contact Us</span>
                <span className="paddingRight"><FontAwesomeIcon icon={faShoppingCart} />{' '}Track Order </span>
                <span className="paddingRight"><FontAwesomeIcon icon={faMapMarkerAlt} />{' '} Find A Store</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>

    );
  }
}

export default Nav1;