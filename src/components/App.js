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

let shake;

class App extends React.Component {

  state = {
    cards,
    correctClicks,
    highScore,
    clickMessage
  };

