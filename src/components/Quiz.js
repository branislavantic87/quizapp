import React, { Component } from 'react';
import { View, ActivityIndicator, Text, TextInput, ScrollView } from 'react-native';
import { fetchQuestions } from '../actions';
import { connect } from 'react-redux';
import he from 'he';
import { Section } from './Section';
import { Button } from './Button';
import { Actions } from 'react-native-router-flux';

class Quiz extends Component {

    state = {
        Textdata: [],
        correct: 0,
        startTime: 0,
        endTime: 0
    }

    componentDidMount() {
        const startTime = Date.now()
        this.props.fetchQuestions()
        this.setState({ startTime })
    }

    updateState = (index, value) => {
        const Textdata = [...this.state.Textdata]; //make a copy of array
        Textdata[index] = value;
        this.setState({ Textdata: Textdata });
    }

    renderQuestions = (array) => (
        array.map((ele, i) =>
            <Section key={i}>
                <Text>{he.decode(ele.question)}</Text>
                <View style={styles.inputHolder}>
                    <TextInput
                        placeholder={'Type you answer'}
                        style={styles.inputStyle}
                        onChangeText={text => this.updateState(i, text)}
                    />
                </View>
            </Section>
        )
    )


    validateAnswer = () => {
        let k = 0
        this.props.questions.map((ele, i) => {
            if (ele.correct_answer == this.state.Textdata[i]) {
                k++
            }
        })
        return k;
    }

    render() {
        if (this.props.questions.length == 0) {
            return (
                <View style={styles.activitiStyle}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        } else {
            return (
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

                    {this.renderQuestions(this.props.questions)}
                    <View style={{ marginTop: 10 }}>
                        <Button onPress={() => {
                            this.validateAnswer();
                            let endTime = Date.now()
                            this.setState({ endTime });
                            Actions.Result({
                                correct: this.validateAnswer(),
                                time: endTime - this.state.startTime
                            })
                        }}>
                            Finish
                            </Button>
                    </View>

                </ScrollView>
            )
        }
    }
}

const styles = {
    activitiStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        // fontSize: 23,
        lineHeight: 18,
        alignItems: 'center',
        textAlign: 'left'
    },
    inputHolder: {
        height: 40,
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        justifyContent: 'center',
        marginTop: 10

    }
}

const mapStateToProps = (state) => {
    const { questions, loading } = state.questions;
    return { questions, loading };
}


export default connect(mapStateToProps, { fetchQuestions })(Quiz)