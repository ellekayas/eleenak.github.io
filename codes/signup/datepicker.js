import React, { Component } from 'react'
import {View,StyleSheet, Text} from 'react-native';
import DatePicker from 'react-native-datepicker'


export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
      <View>
      <DatePicker
        style={{width: 200, height:80, padding: 20, borderColor: "black"}}
        date={this.state.date}
        mode="date"
        androidMode	="spinner"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"

        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
    )
  }
}
