import React from 'react';
import { View, Text } from 'react-native';
import { Button } from './Button';
import { Actions } from 'react-native-router-flux';

export const Result = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Correct answers: {props.correct}</Text>
            <Text>Time taken: {props.time / 1000} sec.</Text>
            <View style={{ width: '80%', height: 40, marginTop: 10 }}>
                <Button onPress={() => Actions.reset('Quiz')}>Play again</Button>
            </View>
        </View>
    )
}