import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import StarRatings from 'react-star-ratings';

import Nav1 from '../Navbars/nav1.component';
import Nav2 from '../Navbars/nav2.component';
import Nav3 from '../Navbars/nav3.component';
import BreadCrumb from './breadCrumb.component';
import SimilarProducts from './SimilarProducts.component';

import adidas from '../../images/adidas.svg';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: {},
            similarProducts: [],
            selectedImage: '',
            productQuantity: 1,
            itemCount: 0
        };
    }

    async componentWillMount() {
        this.setState({
            selectedProduct: {
                description: "Adidas Black T-shirt Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                category: 'Men',
                starRating: 4.5,
                numberOfRates: 22,
                priceAfterSale: 1200,
                priceBeforeSale: 1560,
                salePercentage: 30,
                sizes: ['Small', 'Medium', 'Large', 'XLarge', 'XXLarge'],
                Images: ["https://source.unsplash.com/aZjw7xI3QAA/1144x763",
                    "https://source.unsplash.com/c77MgFOt7e0/1144x763",
                    "https://picsum.photos/id/1018/1000/600/",
                    "https://picsum.photos/id/1015/1000/600/"]
            },
            similarProducts: [{
                description: "Adidas Black T-shirt Lorem ipsum dolor sit amet.",
                starRating: 3.5,
                numberOfRates: 50,
                priceAfterSale: 1200,
                priceBeforeSale: 1560,
                salePercentage: 30,
                pickFrom: 'Genena Mall',
                img: "https://source.unsplash.com/aZjw7xI3QAA/1144x763"
            },
            {
                description: "Adidas Black T-shirt Lorem ipsum dolor sit amet, consectetur.",
                starRating: 4.9,
                numberOfRates: 22,
                priceAfterSale: 1200,
                priceBeforeSale: 1560,
                salePercentage: 30,
                pickFrom: 'Mall of Arabia',
                img: "https://source.unsplash.com/c77MgFOt7e0/1144x763",

            },
            {
                description: "Adidas Black T-shirt Lorem ipsum dolor sit.",
                starRating: 2.0,
                numberOfRates: 38,
                priceAfterSale: 1200,
                priceBeforeSale: 1560,
                salePercentage: 30,
                pickFrom: 'Grand Mall',
                img: "https://picsum.photos/id/1018/1000/600/"
            },
            {
                description: "Adidas Black T-shirt Lorem ipsum dolor.",
                starRating: 3,
                numberOfRates: 41,
                priceAfterSale: 1200,
                priceBeforeSale: 1560,
                salePercentage: 30,
                pickFrom: 'Mall of Arabia',
                img: "https://picsum.photos/id/1015/1000/600/"
            },
            ],
        });
    };

    async componentDidMount() {
        this.setState({
            selectedImage: this.state.selectedProduct.Images[0]
        })
    }

    increment = () => {
        this.setState({
            productQuantity: this.state.productQuantity + 1
        })
    }

    decrement = () => {
        this.setState({
            productQuantity: this.state.productQuantity > 0 ? this.state.productQuantity - 1 : 0
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
        })
    }

    render() {
        return (
            <div>
                <Nav1 />
                <Nav2 selectedProduct={this.state.selectedProduct} productQuantity={this.state.productQuantity} itemCount={this.state.itemCount} />
                <Nav3 />
                <BreadCrumb />
                <div className=" container-fluid">
                    <div className="containerShoppingImages row">
                        <div className="Shopping">
                            <LazyLoadImage src={this.state.selectedImage} effect="blur" alt="selected" className="selectedImage" />
                            <div className="imgContainer">
                                {
                                    this.state.selectedProduct.Images.map((img, index) => (
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
                                {this.state.selectedProduct.description}
                            </p>
                            <div className="shoppingDetailsCategory">{this.state.selectedProduct.category}</div>
                            <div className="row">
                                <Col className="col-md-5">
                                    <StarRatings
                                        rating={this.state.selectedProduct.starRating}
                                        starRatedColor="orange"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension={17}
                                        starSpacing={1}
                                    /></Col>
                                <div className="rateOfFive col-md-4">{this.state.selectedProduct.starRating} of 5</div>
                                <div className="rate">{this.state.selectedProduct.numberOfRates} Rates</div>
                                <br />
                            </div>
                            <div className="row">
                                <div className="priceAfterSale col-md-5">{this.state.selectedProduct.priceAfterSale} LE</div>
                                <div className="priceBeforeSale col-md-4">{this.state.selectedProduct.priceBeforeSale} LE</div>
                                <div className="salePercentage">{this.state.selectedProduct.salePercentage}% Off</div>
                            </div>
                            <hr />
                            <div>
                                <h5>Size</h5>
                                <div className="shoppingDetailsFlex">
                                        {
                                             this.state.selectedProduct.sizes.map((size, index) => (
                                                <div key={index}  className="sizeCircles">
                                                <div className="circle-txt">{size}</div>
                                                </div>
                                             ))
                                        }
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
                                    <input type="text" className="quantityInput" value={this.state.productQuantity} />
                                    <button className="increment" onClick={() => this.increment()}>
                                        &#xff0b;
</button>
                                </div>
                            </div>
                            <div className="twoButtons">
                                <Button onClick={() => { this.addItem() }}>Add To Cart</Button>
                                <Button variant="warning">Pickup From Store</Button>
                            </div>
                        </div>
                    </div><br />
                </div>
                <SimilarProducts similarProducts={this.state.similarProducts} />
            </div>
        );
    }
}

export default Data;
