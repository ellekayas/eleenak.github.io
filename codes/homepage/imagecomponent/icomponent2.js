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

export default class Icomponent2 extends Component {
  render() {
    return(
      <View>
      <ImageBackground source={require('../img/1big.jpg')} style={styles.img1} resizeMode="cover">
      <View>
        <View style={styles.box}>
          <Text style={styles.dtext}>30%</Text>
          <Text style={{fontSize: 13,color: 'white',fontWeight: 'bold',paddingTop: 7,paddingLeft: 2.5}}>OFF</Text>
        </View>
        <View>
          <Text style={styles.text}>Restaurant Name</Text>
          <Text style={styles.text1}>Type</Text>
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
      fontSize: 28,
      paddingLeft: 10
    },

    text:{
      color:'white',
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      fontSize: 16,
      textShadowRadius: 10

    },
    text1:{    fontSize: 15,
        color: 'white',
        textAlign: 'left',
        paddingBottom: 5,
        textAlignVertical:'bottom',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10}

  })
