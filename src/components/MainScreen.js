import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import { Button } from './Button';
import { Actions } from 'react-native-router-flux';


export default class MainScreen extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        console.log('Back pressed')
        return true;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonStyle}>
                    <Button onPress={() => Actions.Quiz()}>
                        Start Quiz!
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    buttonStyle: {
        width: '80%',
        height: 50
    }
}