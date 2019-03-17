import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import Spinner from 'react-loader-spinner';
import {MaterialIndicator} from 'react-native-indicators';

export default class Carga extends Component {
    render(){
        return(
            <View style={estilos.contenedor}>
                <View style={{flex:1,  flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Text> Cargando... </Text>
                </View>            
                <View style={{flex:4}}>
                    <MaterialIndicator color='#2E9AFE' />
                </View>
            </View>
        )
    }
}

const estilos=StyleSheet.create({
    contenedor:{
        flex:5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 65,
    }
})