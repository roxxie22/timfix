import MapboxGL from "@react-native-mapbox-gl/maps";
import React, { useState } from "react";
import { View, Button, Text, ImageBackground, TouchableOpacity } from 'react-native';

const Home = ({ navigation }: any) => {
  MapboxGL.setAccessToken('sk.eyJ1Ijoicm94eGllIiwiYSI6ImNsaGV5c3Y3ejB3ZjkzZW8ycG5vM3l2eGgifQ.YML9NxE29Ywx1DznqU1y1A')
  
  const [coordinates] = useState([78.9629, 20.5937]);

    return (
     <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    }}>
        <View style={{
  height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  }}>
          <MapboxGL.MapView style={{flex: 1}}>
            <MapboxGL.Camera
              zoomLevel={4}
              centerCoordinate={coordinates}
            />
            <MapboxGL.PointAnnotation id="myId" coordinate={coordinates} />
          </MapboxGL.MapView>
        </View>
      </View>
    );
}

export default Home ;