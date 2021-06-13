import React, { Component } from 'react';
import Shopping from './shopping.component';
import SimilarProducts from './SimilarProducts.component';
 
class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedProduct: {},
          similarProducts: []
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
                priceBeforeSale: 1560,
                salePercentage: 30,
                Images: [ "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
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
               
               ]
          })
      };


  render() {
    return (
      <div>
        <Shopping selectedProduct={this.state.selectedProduct}/>
        <SimilarProducts similarProducts={this.state.similarProducts}/>
      </div>        
    );
  }
}
 
export default Data;
