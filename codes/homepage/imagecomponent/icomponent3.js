import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';




import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class Icomponent3 extends Component {
  render() {
    return(
      <View>
      <ImageBackground source={require('../img/1small1.jpg')} style={styles.img1} resizeMode="cover">
      <View>
        <View style={styles.box}>
          <Text style={styles.dtext}>30%</Text>
          <Text style={{fontSize: 8,color: 'white',fontWeight: 'bold',paddingTop: 4,paddingLeft: 1}}>OFF</Text>
        </View>
        <View style={{paddingLeft: 5,marginLeft: 20}} >
          <Text style={styles.text}>Restaurant Name</Text>
          <Text style={{fontSize: 12,color: 'white' }}>Type</Text>
        </View>
      </View>

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
    box:{
      backgroundColor:'rgba(255, 0, 0,0.75)',
      width:'45%',
      height:'35%',
      marginTop: 10,
      flexDirection: 'row',


    },

    dtext:{
      color: 'white',
      fontWeight: '500',
      fontSize: 18,
      paddingLeft: 10
    },

    text:{
      color:'white',
      fontWeight: 'bold',
      fontSize: responsiveFontSize(1.7),
      paddingTop: 35,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10

    }

  })
