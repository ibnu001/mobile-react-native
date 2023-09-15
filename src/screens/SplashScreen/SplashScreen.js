import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import PATH from '../../navigation/NavigationPath';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            // console.log('lalala');
            navigation.replace(PATH.TOKONYADIA)
        }, 5000);
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://i.pinimg.com/originals/ba/dd/66/badd66d78a0afabcb2cfe83c4b0c5638.gif'
                }}
            />

            <Text style={{
                fontSize: 24,
                fontStyle: 'italic',
                fontWeight: 'bold',
                marginTop: 16,
                color: '#f56b00',
            }}
            >Welcome</Text>

            <Text style={{
                fontSize: 32,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: '#f56b00'
            }}
            >TOKONYADIANS</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image: {
        flex: 0.4,
        height: 400,
        width: 350,
        overlayColor: 'white',
        borderRadius: 200
    },

})