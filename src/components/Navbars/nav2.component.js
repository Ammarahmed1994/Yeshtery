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

        {
          this.props.itemCount > 0
            ?
            <Modal show={this.state.show} className="cartModal">
              <div onClick={() => { this.handleClose() }}><span className="closeModal">X</span></div>
              <h4>My Cart</h4>
              <h6>Cart Summary</h6>
              <table>
                <tr>
                  <td rowspan="1"><img class="profilePicture" src={this.props.selectedProduct.Images[0]} /></td>
                  <td><div className="modalDescription">{this.props.selectedProduct.description}</div><br />
                    <div className="cartQuantity">Quantity: {this.props.productQuantity}</div>
                    <div className="row cartDetails">
                      <div className="cartPriceAfterSale">{this.props.selectedProduct.priceAfterSale} LE</div>
                      <Button>Remove</Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="total">Total: {this.props.selectedProduct.priceAfterSale * this.props.productQuantity} LE</td>
                </tr>
              </table>
              <div className="row cartButtons">
                <Button variant="warning">Review Cart</Button>
                <Button>Complete Checkout</Button>
              </div>
            </Modal>
            :
            <Modal show={this.state.show} className="cartModal">
              <div onClick={() => { this.handleClose() }}><span className="closeModal">X</span></div>
              <h4>My Cart</h4>
              <h5 className="emptyCartHeader">Sorry your cart is empty</h5>
              <img src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=6&m=861576608&s=612x612&w=0&h=lhzmWud1lD4GNFwM4UczmiHFYR4CZJHHFxkx689GOkQ=" />
            </Modal>

        }




      </div>

    );
  }
}

export default Nav2;