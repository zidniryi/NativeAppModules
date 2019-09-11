import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToastExample from './ToastExample';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  ToastExample.show('Awesome', ToastExample.SHORT);

  }

  render() {
    return (
      <View>
        <Text> App </Text>
      </View>
    );
  }
}
