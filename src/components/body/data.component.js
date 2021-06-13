import React, { Component } from 'react';
import Shopping from './shopping.component';
 
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedProduct: {},
          similarProducts: {}
        };
      }

      componentWillMount() {
          this.setState({
            selectedProduct : {
                description: "Adidas Black T-shirt Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                category: 'Men',
                starRating: 4.5,
                numberOfRates: 22,
                priceAfterSale: 1200,
                priceBeforeSale: 1420,
                salePercentage: 30,
                Images: [ "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
                "https://source.unsplash.com/c77MgFOt7e0/1144x763",
                "https://picsum.photos/id/1018/1000/600/",
                "https://picsum.photos/id/1015/1000/600/"]
               }
          })
      };


  render() {
    return (
      <div>
        <Shopping selectedProduct={this.state.selectedProduct}/>
      </div>        
    );
  }
}
 
export default Data;
