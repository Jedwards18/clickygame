import React, { Component } from 'react';
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Jumbotron from "./components/Jumbotron";
import images from "./images.json";
import "./App.css";

class App extends Component {

  state = {
    images
  };
  // constructor() {
  //   super();
  //   this.state = "unclicked";
  //   console.log(this.state);
  // }

  // onPress = () => {
  //   this.setState({
  //     state: "clicked"
  //   })
  //   console.log(this.state)
  // }
  setClicked = id => {
    const images = this.state.images.filter(image =>image.state !== "clicked");
    this.setState({ state: "clicked" });
  };

  render() {
    return (
      <Wrapper>
        <Title />
        <Jumbotron />
        {/* {this.images.map(image => ( */}
          {this.state.images.map(image => (
          <Image
            id={image.id}
            key={image.id}
            image={image.image}
            state={image.state}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;