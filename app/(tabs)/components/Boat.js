import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

function Boat ({ name, description, icon_name, poster }) {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={icon_name} size={20} style={{ marginLeft: 10 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}> {name} </Text>
            </View>
            <Text> {description} </Text>
            <Image source={poster} style={{ width: 400, height: 500 }} />
        </ScrollView>
    );
}

export default Boat;
