import React, { Component } from "react";
import "./Slider.css";
import photo1 from "../../images/photo1.jpg";
import photo2 from "../../images/photo2.jpg";
import photo3 from "../../images/photo3.jpg";
import photo4 from "../../images/photo4.jpg";
import leftArrow from "./images/arrow_left.svg";
import rightArrow from "./images/arrow_right.svg";

class Slider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       imageListIndex: 0
    }
  }
  
  showNext(){
    if(this.state.imageListIndex < 3){
      this.setState({
        imageListIndex: this.state.imageListIndex + 1
      })
    }else{
      this.setState({
        imageListIndex: 0
      })
    }
  }
  showPrevious(){
    if(this.state.imageListIndex > 0){
      this.setState({
        imageListIndex: this.state.imageListIndex - 1
      })
    }else{
      this.setState({
        imageListIndex: 3
      })
    }
  }
  
  render() {
    const imageList = [photo1, photo2, photo3, photo4];
    return (
      <>
        <div className="slider_container">
          <div className="navigator">
            <span className="navigator_span1" onClick={() => this.showPrevious()}><img src={leftArrow} /></span>
            <span className="navigator_span2" onClick={() => this.showNext()}><img src={rightArrow} /></span>
          </div>
          <img className="slider_img" src={imageList[this.state.imageListIndex]} />
        </div>
      </>
    );
  }
}

export default Slider;
