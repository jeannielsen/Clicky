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
// By extending the component class, app inherits functionality from it
class App extends Component {
  // setting the initial state of the app component
  state = {
    fractals,
    score: 0,
    topScore: 0,
    clickedFractals: []
  };
// Set clickedImage equal to id function
  clickedImage = id => {
    
    let clickedFractals = this.state.clickedFractals;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedFractals.indexOf(id) === -1) {
      clickedFractals.push(id);
      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      //Alert the user that they won and clear this.setState
      alert("Winner! You clicked each fractal once")
      this.setState({
        score: 0,
        clickedFractals: []
      });
    } else {
      // In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
      this.setState({
        score: 0,
        clickedFractals: []
      });
      //Alert the user that they lost
      alert("Sorry you lost, please start over")
    }
    //if current score is greater than topscore, topscore is set to current score
    if (score > topScore) {
      this.setState({
        topScore: score
      })
    }
  }
// handleIncrement this.state.score by 1
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
//function to shuffle the fractals
  makeShuffle = () => {
    this.setState({ fractals: shuffle(fractals) })
  }
// The render method returns the score and topscore to navbar
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <Wrapper>
{/* Now that this state has an array of data to work with, we can loop over it using map() by modifying our render() method */}

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
