import React, { Component } from 'react'
import {View, StyleSheet, WebView} from 'react-native'

export default class Trailer extends Component{
    render(){
        return(
            <View style={estilos.contenedor}>
                <WebView source={{uri:'https://www.youtube.com/embed/RFinNxS5KN4'}} 
            />
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:.5,
        backgroundColor:'red',
    },
})