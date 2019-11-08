import React, { Component } from "react";

import princess from "./princess.json";
import Navbar from "./components/Nav";
import PrincessCard from "./components/PrincessCard"

class App extends Component {
  // Setting this.state.friends to the friends json array and state to 0 or empty
  state = {
    princess,
    clickedPrincess: [],
    score: 0,
    topScore: 0,
    message: "Click on any character to begin."
  };

  // When an image is clicked, the princess character is disappeared
  imageClick = event => {
    const currentPrincess = event.target.alt;
    const princessAlreadyClicked =
      this.state.clickedPrincess.indexOf(currentPrincess) > -1;

    // If a character that has already been clicked and is clicked again, the game is reset and cards are reordered
    if (princessAlreadyClicked) {
      this.setState({
        friends: this.state.princess.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedPrincess: [],
        score: 0,
        topScore: 0,
        message: "You already clicked that! Game Over."
      });
    }

    // If an available princess is clicked, the score and top score is increased by 1 and cards are reordered
    else {
      this.setState(
        {
          friends: this.state.princess.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedPrincess: this.state.clickedPrincess.concat(
            currentPrincess
          ),
          score: this.state.score + 1,
          topScore: this.state.score,
          message: ""
        },

        // If all 9 Princess are clicked without repetition, a congrats message pops up and the game resets        
        () => {
          if (this.state.score === 9) {
            this.setState({
              friends: this.state.princess.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedPrincess: [],
              score: 0,
              topScore: 0,
              message: "Congratulations! You Win!"
            });
          }
        }
      );
    }
  };

  // Render components
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message} />

        {this.state.princess.map(princess => (
           <PrincessCard
          
           
              imageClick={this.imageClick}
              key={princess.key}
              id={princess.id}
              name={princess.name}
              image={princess.image}
            />
          ))}
          
      </div>
    );
  }
};

export default App;