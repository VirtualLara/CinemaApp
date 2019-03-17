import React, { Component } from 'react'
import {View, StyleSheet, WebView} from 'react-native'

export default class Trailer extends Component{
    constructor(props){
        super(props)


    }


    render(){
        return(
            <View style={estilos.contenedor}>
                <WebView source={{uri:this.props.trailer}} 
            />
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:3,
        backgroundColor:'red',
    },
})