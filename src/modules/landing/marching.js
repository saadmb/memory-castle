import React from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    BackHandler,
    ScrollView
} from 'react-native'

import { styles } from 'styles'

const style = styles.marching

export default class Marching extends React.Component {
    state = {
        inputList: [],
        inputValue: '',
        startTime: new Date().getTime()
    }

    handleInputChange(text) {
        let wordList = this.props.wordList
        let inputList = this.state.inputList
        if (inputList.length < wordList.length && wordList[inputList.length].value === text.trim()) {
            inputList.push(text.trim())
            this._textInput.setNativeProps({ text: '' })
            this.setState({
                inputList: inputList,
                inputValue: text
            })
        }
    }

    render() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.onBackPress()
            return true
        })

        let listLength = this.props.wordList.length;
        if (this.state.inputList.length === listLength) {
            return (
                <View style={style.container}>
                    <Text>
                        Great! {listLength} words took you: {(new Date().getTime() - this.state.startTime) / 1000} seconds
                    </Text>
                </View>
            )
        }

        return (
            <View style={style.container}>
                <TextInput
                    autoFocus={true}
                    ref={component => this._textInput = component}
                    onChangeText={this.handleInputChange.bind(this)}
                    style={style.inputWord} />
                <ScrollView>
                    {this.state.inputList.map((word, i) => {
                        return (
                            <Text key={i} style={style.list}>
                                {word}
                            </Text>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }
}