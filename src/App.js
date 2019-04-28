import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Fractals from "./components/FractalCard";
import Wrapper from "./components/Wrapper";
import fractals from "./Fractals.json";

// function for shuffling the card array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// use ES6 class to define the component
class App extends Component {
  state = {
    fractals,
    score: 0,
    topScore: 0,
    clickedFractals: []
  };

  clickedImage = id => {
    let clickedFractals = this.state.clickedFractals;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedFractals.indexOf(id) === -1) {
      clickedFractals.push(id);
      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      alert("Winner! You clicked each fractal once")
      this.setState({
        score: 0,
        clickedFractals: []
      });
    } else {
      this.setState({
        score: 0,
        clickedFractals: []
      });
      alert("Sorry you lost, please start over")
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }
  }

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  makeShuffle = () => {
    this.setState({ fractals: shuffle(fractals) })
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Wrapper>
          {this.state.fractals.map(fractal => (
            <Fractals
              key={fractal.id}
              id={fractal.id}
              name={fractal.name}
              image={fractal.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
