import React, { Component } from 'react';
import { faUser, faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from 'react-bootstrap';
import adidas from '../../images/adidas.svg';
import { Button, Modal } from 'react-bootstrap';

class Nav2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="navbar2 container-fluid">
        <div>
          <Row>
            <Col className="margin-search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder=" Search" />
            </Col>

            <Col >
              <img src={adidas} alt="adidas" height="70px" />
            </Col>
            <Col className="fl nav2FontSize nav2Icons">
              <div >
                <span className="paddingRight" onClick={() => { this.handleShow() }}><FontAwesomeIcon icon={faShoppingCart} size="lg" /><span className="badge badge-danger">{this.props.itemCount}</span>{' '}Cart</span>
                <span className="paddingRight"><FontAwesomeIcon icon={faHeart} size="lg" />{' '}Wishlist </span>
                <span className="paddingRight"><FontAwesomeIcon icon={faUser} size="lg" />{' '} Login</span>
              </div>
            </Col>
          </Row>
        </div>


        <Modal show={this.state.show} className="cartModal">
          <div onClick={()=>{this.handleClose()}}><span className="closeModal">X</span></div>
          <h4>My Cart</h4>
          <h6>Cart Summary</h6>
          <table>
            <tr>
              <td rowspan="1"><img class="profilePicture" src="https://picsum.photos/id/1015/1000/600/" /></td>
              <td> Lorem ipsum dolor sit amet<br /> consectetur adipiscing elit.<br />
                <div className="cartQuantity">Quantity: 1</div>
                <div className="row cartDetails">
                  <div className="priceAfterSale">1,200 LE</div>
                  <Button>Remove</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="total">Total: 1,200 LE</td>
            </tr>
          </table>
          <div className="row cartButtons">
            <Button variant="warning">Review Cart</Button>
            <Button>Complete Checkout</Button>
          </div>
        </Modal>

        {/* <Modal show={this.state.show} className="cartModal">
          <h4>My Cart</h4>
          <h6>Cart Summary</h6>
         Your cart is empty
        </Modal> */}

      </div>

    );
  }
}

export default Nav2;