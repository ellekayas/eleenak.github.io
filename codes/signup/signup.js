import React, { Component } from 'react';
import {
Platform,
StyleSheet,
View,
AppRegistry,
Image,
ScrollView,
TouchableOpacity,
TextInput,
KeyboardAvoidingView,
Dimensions
} from 'react-native';

import MyDatePicker from './datepicker';

import { Container, Form,Title,Header, Content, Item, Input,Icon,Left,Button,Right,Body,Text,CheckBox} from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <Container>
      <Header  androidStatusBarColor="#900c3e" style={{backgroundColor:"#900c3e"}}>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>App Name</Title>
        </Body>

      </Header>
        <Content contentContainerStyle={styles.contentContainer} >
        <Form >
            <Item >
             <Icon name='person' style={styles.icon} />
              <Input
                placeholder='Name'
              />
            </Item>
            <Item >
            <Icon name='ios-mail' style={styles.icon} />
              <Input
                placeholder='Email'/>
            </Item>
            </Item>
            <Item >
             <Icon name='mobile-phone' type="FontAwesome" style={styles.icon} />
              <Input
                placeholder='Mobile-No'
              />
            </Item>
            <Item inlineLabel>
              <Icon name='ios-key' style={styles.icon} />
              <Input
                placeholder='Password'
                secureTextEntry={true}
              />
            </Item>
            <Item inlineLabel>
              <Icon name='ios-key' style={styles.icon} />
              <Input
                placeholder='Confirm Password'
                secureTextEntry={true}
              />
            </Item>
            <Item inlineLabel style={{paddingVertical:10}}>
            <Icon name='birthday-cake' type="FontAwesome" style={styles.icon} />
            <MyDatePicker />
            </Item>
          <Item  style={{paddingVertical:20,paddingTop: 40}} >
            <CheckBox checked={false} color="black" />
            <Body>
              <Text>Agree the terms and condition</Text>
            </Body>
          </Item>


          <TouchableOpacity style={{alignItems: 'center'}}>
           <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>

         </Form>
          </Content>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  icon:{
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 0
  },

  buttonText:{
    backgroundColor:"#900c3e",
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 150,
    padding: 15,
    marginLeft:0
  },
  contentContainer:{
    alignItems:'center',
    justifyContent: 'center',

  },

});

AppRegistry.registerComponent('App', () => App);
