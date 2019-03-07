import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import cards from '../cards.json';
import '../css/Card.css';
import '../css/App.css';

let correctClicks = 0;

let highScore = 0;

let clickMessage = `Test your memory! Score points with each click without clicking on the same image twice.`;

class App extends React.Component {

  state = {
    cards,
    correctClicks,
    highScore,
    clickMessage
  };

  justClicked = id => {
    // const for cards array state
    const cards = this.state.cards;
  
    // Filter for card id's that have been clicked
    const clickedMatch = cards.filter(card => card.id === id);
  
    // If the image's clicked value is already true, run the game over function
    if (clickedMatch[0].clicked){
      this.gameOver();
    
    // Else if clicked = false, play continues
    } else if (correctClicks < 11) {
      this.continuePlay(clickedMatch);
    
    // If all clicked correctly, run winGame function
    } else {
      this.winGame(clickedMatch);
    }
  };
  
  // Game over function
  gameOver() {

    correctClicks = 0;
    clickMessage = "Image already clicked. Game Over! Click to Start Again."
  
    cards.map((currElement, i) => {
      return cards[i].clicked = false;
    });
  
    // set cards state
    this.setState({ clickMessage });
    this.setState({ correctClicks });
    this.setState({ cards });
  };
  
  continuePlay(clickedMatch) {
  
    // Set its value to true
    clickedMatch[0].clicked = true;
  
    // increment guesses counter
    correctClicks++;
    
    clickMessage = "Good job! Keep clicking!";
  
    if (correctClicks > highScore) {
        highScore = correctClicks;
        this.setState({ highScore });
    }
  
    // Randomly shuffles cards
    cards.sort(function(a, b){return 0.5 - Math.random()});
  
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
    this.setState({ correctClicks });
    this.setState({ clickMessage });
  };
  
  winGame(clickedMatch) {
    // Set its value to true
    clickedMatch[0].clicked = true;
  
    // restart the guesses counter
    correctClicks = 0;
  
    // All correct message
    clickMessage = "Great Job, you got them all! Click to start again!";
    highScore = 12;
    this.setState({ highScore });
    
    cards.map((currElement, i) => {
      return cards[i].clicked = false;
    });
  
    // Shuffle the cards
    cards.sort(function(a, b){return 0.5 - Math.random()});
  
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
    this.setState({ correctClicks });
    this.setState({ clickMessage });
  };
  
    render() {
      return (
        <div>
          <Header />
            <h1 id="gameTitle">Superhero Memory Game</h1>
            <h3 className="scoreSummary" id="clickMsg">
              {this.state.clickMessage}
            </h3>
                  
            <h3 className="scoreSummary">
                Correct Clicks This Game: {this.state.correctClicks} 
            </h3>
            <h3 className="scoreSummary">
                Your High Score: {this.state.highScore} 
            </h3>
            <div className="flexContainer">
              {this.state.cards.map(card => (
                <Card
                justClicked={this.justClicked}
                id={card.id}
                class={card.class}
                key={card.id}
                name={card.name}
                image={card.image} 
                />
              ))}
            </div>
          <Footer />
        </div>
      )
    }
  }
  
  export default App;

