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
KeyboardAvoidingView
} from 'react-native';


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
        <Content style={styles.content} >
        <Form style={styles.form}>
            <Item inlineLabel>
             <Icon name='person' style={styles.icon} />
              <Input
                placeholder='Name'
              />
            </Item>
            <Item inlineLabel>
            <Icon name='ios-mail' style={styles.icon} />
              <Input
                placeholder='Email'/>
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

          </Form>
          <Item>
            <CheckBox checked={false} color="black"/>
            <Body>
              <Text>Agree the terms and condition</Text>
            </Body>
          </Item>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  icon:{
    fontSize: 20,
    color: '#908E8E'
  },
  content:{
    padding: 30,
    width: 420,


  },
  form:{
    padding:20
  }
})
