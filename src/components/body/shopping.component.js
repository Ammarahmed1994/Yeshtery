import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import adidas from '../../images/adidas.svg';
import { Button } from 'react-bootstrap';
import Nav2 from '../Navbars/nav2.component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: this.props.selectedProduct.Images[0],
      value: 1,
      itemCount: 0,
      product: {}
    };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement = () => {
    this.setState({
      value: this.state.value > 0 ? this.state.value - 1 : 0
    });;
  }


  imageClick = (img) => {
    this.setState({
      selectedImage: img
    })
  }

  addItem = () => {
    this.setState({
      itemCount: this.state.itemCount + 1
    });;
    console.log(`itee`, this.state.itemCount)
  }

  render() {
    const selectedProduct = this.props.selectedProduct;
    
    return (
      <div className=" container-fluid">
        <div className="containerShoppingImages row">

          <div className="Shopping">

            <LazyLoadImage src={this.state.selectedImage} effect="blur" alt="selected" className="selectedImage" />
            <div className="imgContainer">
              {
                selectedProduct.Images.map((img, index) => (
                 <LazyLoadImage
                    key={index}
                    effect="blur"
                    src={img}
                    alt="thumbnails"
                    onClick={() => this.imageClick(img)}
                  />
                ))}
            </div>
          </div>
          <div className="shoppingDetails">
            <img src={adidas} alt="adidas" className="DetailsLogo" />
            <p>
              {selectedProduct.description}
          </p>
            <div className="shoppingDetailsCategory">{selectedProduct.category}</div>
            <div className="row">
              <Col className="col-md-5">
                <StarRatings
                  rating={selectedProduct.starRating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension={17}
                  starSpacing={1}
                /></Col>
              <div className="rateOfFive col-md-4">{selectedProduct.starRating} of 5</div>
              <div className="rate">{selectedProduct.numberOfRates} Rates</div> 
              <br />
            </div>
            <div className="row">
              <div className="priceAfterSale col-md-5">{selectedProduct.priceAfterSale} LE</div>
              <div className="priceBeforeSale col-md-4">{selectedProduct.priceBeforeSale} LE</div>
              <div className="salePercentage">{selectedProduct.salePercentage}% Off</div>
            </div>
            <hr />
            <div>
              <h5>Size</h5>
              <div className="shoppingDetailsFlex">
                <div className="sizeCircles"><div className="circle-txt">Small</div></div>
                <div className="sizeCircles"><div className="circle-txt">Medium</div></div>
                <div className="sizeCircles"><div className="circle-txt">Large</div></div>
                <div className="sizeCircles"><div className="circle-txt">XLarge</div></div>
                <div className="sizeCircles"><div className="circle-txt">XXLarge</div></div>
              </div>

            </div>
            <hr />
            <div>
              <h5>Color</h5>
              <div className="shoppingDetailsFlex">
                <div className="colorCirclesBlack"></div>
                <div className="colorCirclesRed"></div>
              </div>
              <hr />

            </div>
            <div>
              <h5>
                Quantity
</h5><br />
              <div className="quantity-input">
                <button className="decrement" onClick={() => this.decrement()}>
                  &mdash;
</button>
                <input type="text" className="quantityInput" value={this.state.value} />
                <button className="increment" onClick={() => this.increment()}>
                  &#xff0b;
</button>
              </div>
            </div>
            <div className="twoButtons">
              <Button onClick={()=>{this.addItem()}}>Add To Cart</Button>
              <Button variant="warning">Pickup From Store</Button>
            </div>
          </div>
        </div><br />
        <Nav2 itemCount={this.state.itemCount}/>
      </div>
    )
  }
}

export default Shopping;