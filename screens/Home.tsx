import React, { useState } from "react";
import { View, Button, Text, ImageBackground, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";

const Home = ({ navigation }: any) => {
  return <MapView
  style={{width: '100%', height: '100%'}}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/>
}

export default Home;