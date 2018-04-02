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



import { Container, Form,Title,Header, Content, Item, Input,Icon,Left,Button,Right,Body,Text,CheckBox} from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (

      <Container style={{backgroundColor: "#900c3e"}} >

      {/* Header */}

      {/*<Header  androidStatusBarColor="#900c3e" style={{backgroundColor:"#900c3e"}}>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>App Name</Title>
        </Body>
      </Header>*/}

      <Content contentContainerStyle={styles.contentContainer} >
          <Form >
            <Item >
            <Icon name='person' style={styles.icon} />
              <Input
                placeholder='Email/Phone'
                style={styles.text}/>
            </Item>
            <Item inlineLabel>
              <Icon name='ios-key' style={styles.icon} />
              <Input
                placeholder='Password'
                secureTextEntry={true}
                style={styles.text}
              />
            </Item>
            <Item  style={{paddingVertical:20}} >
              <CheckBox checked={false} color="white" />
              <Left style={{marginLeft: 15}}>
                <Text style={styles.text}>Remember Me</Text>
              </Left>
            </Item>
            <TouchableOpacity style={{alignItems: 'center'}}>
             <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </Form>
          <Text style={styles.text}>Also login with</Text>
          <Item>
          <Button iconLeft >
            <Icon name='logo-facebook' />
            <Text>Facebook</Text>
          </Button>
          </Item>
          <Item>
          <Button iconLeft>
            <Icon name='logo-twitter' />
            <Text>Twitter</Text>
          </Button>
          </Item>
          <Item>
          <Button iconLeft>
            <Icon name='logo-googleplus' />
            <Text>Google PLus</Text>
          </Button>
          </Item>
          <Text style={styles.text}>New to MY APP</Text>
          <TouchableOpacity style={{alignItems: 'center'}}>
           <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
      </Content>
    </Container>

    );
  }
}
const styles = StyleSheet.create({
  icon:{
    fontSize: 20,
    color: 'white',
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
    backgroundColor:"#900c3e",

  },
  text:{
    color: 'white'
  }

});

AppRegistry.registerComponent('App', () => App);
