import { default as classNames } from 'classnames';
import React, { Component } from 'react';

import './App.css';
import './animation.css';
import { getRandomQuestion } from './questions';

const DONT_REPEAT_QUESTIONS_IN_X_TRYS = 10;

interface AppProps { }
interface AppState {
  name: string;
  displayedQuestion: string;
  lastShownQuestions: string[];
  isFlipping: boolean;
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: 'React',
      displayedQuestion: getRandomQuestion([]),
      lastShownQuestions: [],
      isFlipping: false,
    };
  }

  render() {

    const onRerollClick = () => {
      this.setState({
        displayedQuestion: getRandomQuestion(this.state.lastShownQuestions),
        lastShownQuestions: getLastX(this.state.lastShownQuestions.concat(this.state.displayedQuestion)),
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
          <button className="reroll-btn" onClick={onRerollClick} disabled={this.state.isFlipping}> Who Goes First? </button>
        </div>
        <span className="bottom-left-blocks"/>
        <span className="bottom-right-blocks"/>
        <span className="top-right-blocks"/>
      </div>
    );
  }
}

function getLastX<T>(array: Array<T>) {
  return array.slice(Math.max(array.length - DONT_REPEAT_QUESTIONS_IN_X_TRYS, 0))
}
