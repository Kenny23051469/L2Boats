import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

function Boat({ name, description, icon_name, poster }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Icon name={icon_name} size={30} style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
            <Image source={poster} style={styles.image} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#dadada',
        borderWidth: 2,
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'gray',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#5c5c5c',
        padding: 5,
    },
    icon: {
        marginRight: 10,
        color: '#000',
    },
    boatName: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
        backgroundColor: '#c6c6c6',
        textAlign: 'justify',
        borderWidth: 2,
        borderColor: '#5c5c5c',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginTop: 15,
    },
});

export default Boat;
