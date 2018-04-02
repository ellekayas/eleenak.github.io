import React, { Component } from 'react';
import { StyleSheet, View, Button ,TouchableOpacity,Text,KeyboardAvoidingView} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import t from 'tcomb-form-native'; // 0.6.11

const Form = t.form.Form;
const Age = t.refinement(t.Number, function(n) {
  return n >= 18;
});
Age.getValidationErrorMessage = function() {
  return 'bad age';
};
t.Number.getValidationErrorMessage = function(value) {
  if (!value) return 'empty number';
  else if (!Number.isInteger(value)) return 'bad number';
};

const User = t.struct({
  email: t.String,
  name:t.String,
  age: Age,
  password:t.String,
  terms: t.Boolean,

});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '300',
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '300',
    },
  },
};

const options = {
  order: ['name','email','password','age', 'terms'],
  fields: {
    email: {
      placeholder: 'email@mail.com',
      error: 'email is empty?',
      keyboardType:"email-address",
      returnKeyType:'next'
    },
    name: {
      placeholder: 'Name',
      error: 'Name is empty?',
      returnKeyType:'next'
    },
    age: {
      placeholder: '18 AS EXAMPLE',
      returnKeyType:'next'
    },
    password: {
      password: true,
      placeholder: 'Password',
      secureTextEntry: true,
      error: 'password is empty?',
      autoCapitalize:"none",
      autoCorrect:false,
      returnKeyType:'next'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  };

  render() {
    return (
      <View>
      <Header
        leftComponent={{ icon: 'ios-arrow-back',type:'ionicon', color: '#fff' }}
        centerComponent={{ text: 'App Name', style: { color: '#fff',fontSize:25 } }}
        outerContainerStyles={{ backgroundColor: '#900c3e' }}
      />
      <KeyboardAvoidingView  behavior="padding" style={styles.container}>

        <Form ref={c => (this._form = c)} type={User} options={options} />
        <TouchableOpacity style={styles.button}  onPress={this.handleSubmit}>
          <Text style={styles.buttonText} >Sign Up</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    marginTop: 0,
    padding: 30,
    backgroundColor: '#ffffff',
  },
  buttonText:{
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff'

  },
  button:{
    width: 350,
    backgroundColor: '#900c3e',
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',

  },
});
