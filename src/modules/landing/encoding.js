import React from 'react';
import {
    Text,
    View,
    TextInput,
    Button,
    BackHandler
} from 'react-native'

import { words } from './words'
import { styles } from 'styles'

const style = styles.encoding

export default class Encoding extends React.Component {
    render() {
        let list = this.props.wordList
        let listLength = list.length
        let lastWord = listLength ? list[listLength - 1] : {}
        let totalTime = list.reduce((total, { index }) => {
            // let buffer = getBufferFromIndex(index)
            return index + total

        }, 0)

        return (
            <View style={style.container}>
                <View>
                    <Text>

                    </Text>
                </View>
                <View style={style.content}>
                    <Text>
                        {lastWord.value ? '' : 'Tap Next to start making your list.'}
                    </Text>
                    <Text style={style.word}>
                        {lastWord.value}
                    </Text>
                    {/*<Text>
                        Score: {totalTime}
                    </Text>*/}
                    {lastWord.value && <Text>
                        List size: {listLength}
                    </Text>}
                    <View style={style.next}>
                        <Button
                            title='Next'
                            onPress={this.props.onNextPress}
                        />
                    </View>
                    <View style={style.test}>
                        <Button
                            disabled={listLength > 4 ? false : true}
                            title='Test your memory'
                            color='red'
                            onPress={this.props.onTestStart}
                        />
                    </View>
                </View>
                <View>
                    <Text>

                    </Text>
                </View>
            </View>
        )
    }
}