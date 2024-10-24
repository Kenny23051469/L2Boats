import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

function Boat ({ name, description, icon_name, poster }) {
    return (
        <ScrollView>
            <Image source={poster} style={{width: 400, height: 500}} />
            <Text> {name} </Text>
            <Text> {description} </Text>
            <Icon name = {icon_name} />
        </ScrollView>
    );
}

export default Boat;
