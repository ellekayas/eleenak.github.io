import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

import Discount from '../component/discount';
import { Rating } from 'react-native-elements';

export default class Icomponent1 extends Component {
  render() {
    return(
      <View>
      <ImageBackground source={require('../img/hotel.jpg')} style={styles.img1} resizeMode="cover">
        <Discount />
        <View style={{marginLeft: 5}}>
          <Text style={styles.text}>Restaurant Name</Text>
          <Text style={styles.text1}>Type</Text>
        </View>
        <Rating
          readonly
          type="star"
          ratingCount={5}
          fractions={2}
          startingValue={2.5}
          imageSize={20}
          style={{
          paddingVertical: 0,
          alignItems: 'flex-end',

          }}
          ratingBackgroundColor='blue'
          />
      </ImageBackground>
      </View>
    )
  }
}

  const styles=StyleSheet.create({

    img1:{
      width: "100%",
      height:"100%"
    },
    text1:{
      fontSize: 15,
      color: 'white',
      textAlign: 'left',
      paddingBottom: 5,
      textAlignVertical:'bottom',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10
    },
    text:{
      color:'white',
      fontWeight: 'bold',
      fontSize:20,
      paddingTop: 35,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10

    }
  })
