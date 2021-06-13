import React, { Component } from 'react';
import Shopping from './shopping.component';
import{ Card} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import adidas from '../../images/adidas.svg';
 
class SimilarProducts extends Component {
  render() {
    return (
      <div className="container-fluid similarProducts">
        <h4>Similar Products</h4>
        <h5>You may like these products also</h5>
        <div className="similarProductsCard">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/id/1015/1000/600/" style={{ height:'150px' }}/>
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up 
    </Card.Text>

              <div className="priceAfterSale">1,200 LE</div>
              <div className="row">
              <div className="priceBeforeSale col-md-4">1420 LE</div>
              <div className="salePercentage">30% Off</div>
              <img src={adidas} alt="adidas" className="DetailsLogo" />
            </div>
            <div className="row stars">
              <div >
                <StarRatings
                  rating={4.5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension={17}
                  starSpacing={1}
                /></div>
              <div className="rateOfFive">4.5 of 5</div>
            </div>
            <br />
              <div className="pickupFrom">pickup from GnenaMall</div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/id/1015/1000/600/" style={{ height:'150px' }}/>
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up 
    </Card.Text>

              <div className="priceAfterSale">1,200 LE</div>
              <div className="row">
              <div className="priceBeforeSale col-md-4">1420 LE</div>
              <div className="salePercentage">30% Off</div>
              <img src={adidas} alt="adidas" className="DetailsLogo" />
            </div>
            <div className="row stars">
              <div >
                <StarRatings
                  rating={4.5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension={17}
                  starSpacing={1}
                /></div>
              <div className="rateOfFive">4.5 of 5</div>
            </div>
            <br />
              <div className="pickupFrom">pickup from GnenaMall</div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/id/1015/1000/600/" style={{ height:'150px' }}/>
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up 
    </Card.Text>

              <div className="priceAfterSale">1,200 LE</div>
              <div className="row">
              <div className="priceBeforeSale col-md-4">1420 LE</div>
              <div className="salePercentage">30% Off</div>
              <img src={adidas} alt="adidas" className="DetailsLogo" />
            </div>
            <div className="row stars">
              <div >
                <StarRatings
                  rating={4.5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension={17}
                  starSpacing={1}
                /></div>
              <div className="rateOfFive">4.5 of 5</div>
            </div>
            <br />
              <div className="pickupFrom">pickup from GnenaMall</div>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/id/1015/1000/600/" style={{ height:'150px' }}/>
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up 
    </Card.Text>

              <div className="priceAfterSale">1,200 LE</div>
              <div className="row">
              <div className="priceBeforeSale col-md-4">1420 LE</div>
              <div className="salePercentage">30% Off</div>
              <img src={adidas} alt="adidas" className="DetailsLogo" />
            </div>
            <div className="row stars">
              <div >
                <StarRatings
                  rating={4.5}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  starDimension={17}
                  starSpacing={1}
                /></div>
              <div className="rateOfFive">4.5 of 5</div>
            </div>
            <br />
              <div className="pickupFrom">pickup from GnenaMall</div>
  </Card.Body>
</Card>
        </div>

      </div>        
    );
  }
}
 
export default SimilarProducts;
