import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

import {Header,Icon,Button,Left,Right,Body,Title,Footer} from 'native-base';
import Discount from './component/discount';

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header  androidStatusBarColor="#900c3e" style={{backgroundColor:"#900c3e"}}>
          <Left>
            <Title>App Name</Title>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
          <View style={styles.body}>
            <View style={styles.offer}>
              <View style={styles.head}>
                <Text style={{color:'black',padding: 10,fontSize: 25,}} >
                 Offers
                 <Icon name='local-offer' type='MaterialIcons' />
                </Text>
              </View>
              <View style={styles.sbody}>
                <View style={styles.fbox}>
                  <ImageBackground source={require('./img/hotel.jpg')} style={styles.img1} resizeMode="cover">
                    <Discount />
                  </ImageBackground>
                </View>
                <View style={styles.sbox}>
                  <View style={styles.dleft}>
                    <ImageBackground source={require('./img/1big.jpg')} style={styles.img1}  resizeMode="cover">
                      <Discount />
                    </ImageBackground>
                  </View>
                  <View style={styles.dright}>
                    <View style={styles.dup}>
                      <ImageBackground source={require('./img/1small1.jpg')} style={styles.img1}  resizeMode="cover">
                        <Discount />
                      </ImageBackground>
                    </View>
                    <View style={styles.ddown}>
                      <ImageBackground source={require('./img/1small2.jpg')} style={styles.img1}  resizeMode="cover">
                        <Discount />
                      </ImageBackground>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.nearby}>
              <Text style={{color:'black',padding: 10,fontSize: 25,}} >
               Nearby
               <Icon name='spinner-2' type='EvilIcons' />
              </Text>
            </View>
          </View>
      </View>
    )
  }
}

  const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    body:{
      flex:1,
      backgroundColor:'black'
    },
    offer:{
      flex:9,
      backgroundColor:'red'
    },
    nearby:{
      flex:1,
      backgroundColor:'white'
    },
    head:{
      flex:2,
      backgroundColor: 'white'
    },
    sbody:{
      flex:15,
      backgroundColor: 'blue'
    },
    fbox:{
      flex:1,

    },
    sbox:{
      flex: 1,
      backgroundColor: 'green',
      flexDirection: 'row'
    },
    dleft:{
      flex: 1,

    },
    dright:{
      flex:1,
      backgroundColor: '#845469'
    },
    dup:{
      flex: 1,
      backgroundColor: '#896363'
    },
    ddown:{
      flex: 1,
      backgroundColor: '#295678'
    },
    img1:{
      width: "100%",
      height:"100%"
    },


  })
