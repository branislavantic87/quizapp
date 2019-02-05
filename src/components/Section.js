import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
    return (
        <View style={[styles.constainerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    constainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { Section };
