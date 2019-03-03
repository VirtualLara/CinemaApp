import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Principal from './src/Vistas/Principal';

export default class App extends React.Component {
  render() {
    return (
      <Principal/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
