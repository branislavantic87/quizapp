import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children, disabled }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[buttonStyle, disabled ? { opacity: 0.2 } : '']}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColof: '#white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center'
    }
};

export { Button };
