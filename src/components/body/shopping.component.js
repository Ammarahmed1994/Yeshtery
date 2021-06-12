import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import adidas from '../../images/adidas.svg';

const Images = [
  "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/"
]

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: Images[0],
      value: 1
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

  render() {

    return (
      <div className=" container-fluid">
        <div className="containerShoppingImages row">
          <div className="Shopping">


            <img src={this.state.selectedImage} alt="selected" className="selectedImage" />
            <div className="imgContainer">
              {
                Images.map((img, index) => (
                  <img
                    key={index}
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
              Adidas Black T-shirt Lorem ipsum dolor sit <br />
          amet, consectetur adipiscing elit
          </p>
            <div className="shoppingDetailsCategory">Men</div>
            <div className="row">
              <Col className="col-md-5">
                <StarRatings
                  rating={4.5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension={17}
                  starSpacing={1}
                /></Col>
              <div className="rateOfFive col-md-4">4.5 of 5</div>
              <div className="rate">22 Rates</div>
              <br />
            </div>
            <div className="row">
              <div className="priceAfterSale col-md-5">1,200 LE</div>
              <div className="priceBeforeSale col-md-4">1420 LE</div>
              <div className="salePercentage">30% Off</div>
            </div>
            <hr/>
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
          <hr/>
          <div>
            <h5>Color</h5>
            <div className="shoppingDetailsFlex">
            <div className="colorCircles"><div className="circle-txt"></div></div>
            <div className="colorCircles"><div className="circle-txt"></div></div>
            </div>
            
          </div>
          <div>
        <h5>
        Quantity
       </h5>
      <div className="quantity-input">
        <button className="decrement" onClick={() => this.decrement()}>
          &mdash;
        </button>
        <input  type="text" className="quantityInput"value={this.state.value} readonly />
        <button className="increment" onClick={() => this.increment()}>
          &#xff0b;
        </button>  
      </div>  
      </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shopping;