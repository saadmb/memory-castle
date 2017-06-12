import {
    StyleSheet
} from 'react-native'

export const styles = {
    encoding: StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: '#F5FCFF'
        },
        content: {
            flex: 1,
            paddingTop: 20,
            alignItems: 'center'
        },
        word: {
            fontSize: 40,
        },
        next: {
            width: 80,
            padding: 10
        },
        test: {
            width: 180,
            padding: 10
        }
    }),

    marching: StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF'
        },
        inputWord: {
            width: 180,
            height: 50,
            marginTop: 20,
            borderColor: 'green', 
            borderWidth: 2,
            fontSize: 25
        },
        list: {
            fontSize: 25,
            alignSelf: 'center'
        }
    }),
}