import React, {Component} from 'react';
import {View, StyleSheet, Text} from'react-native';

export default class Sinopsis extends Component{

    render(){
        return(
            <View style={estilos.contenedor}>
                <View style={estilos.seccionDuracion}>

                </View>
                <View style={estilos.seccioninfo}>

                </View>
                <View style={estilos.seccionsinopsis}>

                </View>
            </View>
        )
    }
}

const estilos=StyleSheet.create({
    contenedor:{
        flex:6,
    },
    seccionDuracion:{
        flex:1,
        backgroundColor: 'pink'
    },
    seccioninfo:{
        flex:2,
        backgroundColor: 'red',
    },
    seccionsinopsis:{
        flex:4,
        backgroundColor:'green',
    }
})