import React, { Component } from 'react';
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      selectedImage: Images[0]
    };
  }

  render() {
    const imageClick = (img) => {
      this.setState({
        selectedImage: img
      })
    }
    return (
      <div className=" container-fluid">
        <div className="containerShoppingImages row">
          <div className="Shopping">

         
          <img src={this.state.selectedImage} alt="selected" className="selectedImage" />
          <div className="imgContainer">
          {/* <FontAwesomeIcon icon={faChevronLeft} className="shoppingIcon"/> */}
            {
              Images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnails"
                  onClick={() => imageClick(img)}
                />
              ))}
              {/* <FontAwesomeIcon icon={faChevronRight} className="shoppingIcon"/> */}
          </div>
          </div>
          <div className="shoppingDetails">
            <h2>Hello Float</h2>
            <p>jglkrjglksfjgslkfjgflksjgklfsdjg gjsklfdjgklsfdjg fsdgkjdsfglkjdf lkgjsfdklgj sfdklgjsdf</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Shopping;