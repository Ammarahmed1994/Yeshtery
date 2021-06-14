import React, { Component } from 'react';
import{ Card} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import adidas from '../../images/adidas.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
class SimilarProducts extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const similarProducts = this.props.similarProducts;
    return (
      <div className="container-fluid similarProducts">

        <h4>Similar Products</h4>
        <h5>You may like these products also</h5>
        <div className="similarProductsCard">
        {
          similarProducts.map((product, index)=> {
            return(<Card key={index} style={{ width: '18rem' }}>
            <LazyLoadImage variant="top" src={product.img} effect="blur" style={{ height:'150px' }}/>
            <Card.Body>
              <Card.Text>
                {product.description}
              </Card.Text>
          
                        <div className="priceAfterSale">{product.priceAfterSale} LE</div>
                        <div className="row">
                        <div className="priceBeforeSale col-md-4">{product.priceBeforeSale} LE</div>
                        <div className="salePercentage">{product.salePercentage}% Off</div>
                        <LazyLoadImage src={adidas} effect="blur" alt="adidas" className="DetailsLogo" />
                      </div>
                      <div className="row stars">
                        <div >
                          <StarRatings
                            rating={product.starRating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            name='rating'
                            starDimension={17}
                            starSpacing={1}
                          /></div>
                        <div className="rateOfFive">{product.starRating} of 5</div>
                      </div>
                      <br />
                        <div className="pickupFrom">pickup from {product.pickFrom}</div>
            </Card.Body>
          </Card>)
            
          })
        }
        </div>

      </div>        
    );
  }
}
 
export default SimilarProducts;
