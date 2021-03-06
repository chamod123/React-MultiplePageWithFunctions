import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colour from '../constants/Colour';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}> 
            <Text style={styles.title}>Start a New Game</Text>
             <Card style={styles.inputContainer}>
                <Text> Select a Number </Text>
                <Input style={styles.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={() => { }} color={Colour.recent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => { }} color={Colour.confirm}/></View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        width: 90
    },
    input:{
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;