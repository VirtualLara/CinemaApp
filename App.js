import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navegador from './src/Navegador/StackNevegador';
import {Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import Principal from './src/Vistas/Principal'


export default class App extends React.Component {
  async componentDidMount(){
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
  }

  render() {
    return (
      <Navegador/>
      // <Principal/>
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
