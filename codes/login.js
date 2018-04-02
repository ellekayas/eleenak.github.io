import React, { Component } from 'react';

import {
Platform,
StyleSheet,
Text,
View,
AppRegistry,
Image,
ScrollView,
TouchableOpacity,
TextInput,
KeyboardAvoidingView
} from 'react-native';

import {
  Button,
  SocialIcon
} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import CheckBox from 'react-native-checkbox';

export default class App extends Component{

  render() {

    return (

      <KeyboardAvoidingView style={styles.container}>

        <Text style={styles.toptext}>App Name</Text>
        <View style={styles.textbar}>
          <Icon
          name="user"
          size={20}
          color="white"
          style={styles.icon}
          />
          <TextInput
          style={styles.inputBox}
          underlineColorAndroid='white'
          placeholder="Username or e-mail"
          placeholderTextColor ="white"
          autoCorrect={false}
          returnKeyType='next'
          keyboardType="email-address"
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          />
        </View>

        <View style={styles.textbar}>

          <Icon
          name="lock"
          size={20}
          color="white"
          style={styles.icon}
          />

          <TextInput
          style={styles.inputBox}
          underlineColorAndroid='white'
          placeholder="Password"
          placeholderTextColor ="white"
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize:"none",
          returnKeyType='go'
          ref={(input) => this.passwordInput = input}
          />

        </View>

        <View>

          <CheckBox
            checkboxStyle={styles.checkbox}
            label='Remember Me'
            labelStyle={styles.labelStyle}
            checked={true}
            onChange={(checked) => console.log('I am checked', checked)}
            />

        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.logintext}>Also login with</Text>
        </View>

        <View style={styles.socialicon}>
          <SocialIcon
          type='facebook'
          />
          <SocialIcon
            type='twitter'
          />
          <SocialIcon
            type='google-plus'
          />
        </View>

        <View style={styles.textbar}>
          <Text style={styles.bottomtext}>New to MY APP? </Text>
          <TouchableOpacity >
            <Text style={styles.bottomtext}> Sign Up</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>

)}};

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#900c3e',
    alignItems: 'center',
    justifyContent: 'center'
  },

  toptext:{
    color: '#ffffff',
    fontSize: 18},

  inputBox:{
    width:300,
    backgroundColor: '#900c3e',
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },

  textbar:{
    flexDirection: 'row'
  },

  socialicon:{
    flexDirection: 'row',
  },

  button:{
    width: 300,
    backgroundColor: '#3f87f5',
    marginVertical: 20,
    padding: 15,
    alignItems: 'center'
  },

  buttonText:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff'

  },

  bottomtext:{
    fontSize: 16,
    fontWeight: '200',
    color: '#ffffff',
    paddingTop: 20
  },

labelStyle:{
    color:'white',
    fontWeight: 'normal',
    fontSize: 16,
    marginLeft: 4
  },
checkbox:{

  backgroundColor: 'white'
},

icon:{
  paddingTop: 20
},

logintext:{
  color: 'white',
  fontSize: 15,
  padding:20
}

});

AppRegistry.registerComponent('App', () => App);
