import { default as classNames } from 'classnames';
import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';
import './animation.css';
import { getRandomQuestion } from './questions';

interface AppProps { }
interface AppState {
  name: string;
  displayedQuestion: string;
  isFlipping: boolean;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: 'React', 
      displayedQuestion: getRandomQuestion(''),
      isFlipping: false,
    };
  }

  render() {

    const onRerollClick = () => {
      this.setState({
        displayedQuestion: getRandomQuestion(this.state.displayedQuestion),
        isFlipping: true,
      });
      setTimeout(() => {
        this.setState({
          isFlipping: false,
        });
      }, 800);
    }

    return (
      <div className="App">
        <div className="container"> 
          <h1> The player who goes first is: </h1>
          <div className="spinning-question-container">
            <div className={classNames('spinning-question', 'animate', {flipInX: this.state.isFlipping})}>
              <div className="inner">
                { this.state.displayedQuestion }
              </div>
            </div>
          </div>
          <button className="reroll-btn" onClick={onRerollClick} disabled={this.state.isFlipping}> Who goes first? </button>
        </div>
      </div>
    );
  }
}
