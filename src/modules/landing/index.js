import React from 'react';
import {
  BackHandler
} from 'react-native'

import Encoding from './encoding'
import Marching from './marching'
import { words } from './words'

export default class Landing extends React.Component {
  state = {
    testStart: false,
    wordList: []
  }

  goToTest() {
    this.setState({
      testStart: true
    })
  }

  goToMain() {
    this.setState({
      testStart: false,
      wordList: []
    })
  }

  handleNextPress() {
    let random = words[Math.floor(Math.random() * words.length)]
    let list = this.state.wordList
    list.push({
      value: random,
      time: new Date().getTime(),
      index: list.length,
    })
    this.setState({
      wordList: list
    })
  }

  render() {
    if (!this.state.testStart) {
      return (
        <Encoding 
          wordList={this.state.wordList}
          onNextPress={this.handleNextPress.bind(this)}
          onTestStart={this.goToTest.bind(this)} />
      )
    } else {
      return (
        <Marching 
          wordList={this.state.wordList}
          onBackPress={this.goToMain.bind(this)} />
      )
    }
  }
}