import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,

} from 'react-native';


export default function Splash({ navigation }) {

    useEffect(() => {

        setTimeout(() => {
            navigation.replace('Login Screen');
        }, 2000);
    }, []);


    return (
        <View style={styles.body} >
            <Image
       
                style={styles.logo}
                source={require('.././Assets/logowithname.png')}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
    
       
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
})