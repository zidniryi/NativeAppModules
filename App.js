import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ToastExample from './ToastExample';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

_onToast() {
  ToastExample.show('Awesome is write in Native Module', ToastExample.LONG);

}

  render() {
    return (
      <View style={styles.containerApp}>
        <Text>Hello Strangger</Text>
       <Button title='Hello From Another World' onPress={this._onToast} color='green'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerApp:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
