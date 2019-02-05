import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ onChangeText, value, placeholder, secureTextEntry, onSubmitEditing, editable }) => {

    const { inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                autoCorrect={false}
                value={value}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={inputStyle}
                secureTextEntry={secureTextEntry}
                editable={editable}
            />
        </View>
    )
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        // fontSize: 23,
        lineHeight: 18,
        textAlign: 'left'
    },
    lableStyle: {
        fontSize: 14,
        flex: 1
    },
    containerStyle: {
        height: 40,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    }
};

export { Input };