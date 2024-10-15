import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function PayScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Pay Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PayScreen;