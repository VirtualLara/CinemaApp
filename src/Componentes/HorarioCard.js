import React, {Component} from 'react';
import {View, StyleSheet, Text } from 'react-native';



export default class HorarioCard extends Component {
    

    render(){
        return(
            <View style={estilos.contenedor}>
                <View style={estilos.seccionTitulo}>
                    <Text style={estilos.textoTitulo}> plaza americas  </Text>
                </View>
               <View stile={estilos.seccionHoras}>
                    <Text style={estilos.textoHorario}> museo </Text>
               </View >
            </View>
        );
    }
        
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:4,
        paddingVertical: 12,
        paddingHorizontal: 10,
    },
    seccionTitulo:{
        flex:1.5,
    },
    seccionHoras:{
        flex:3,
        justifyContent: 'center',
        paddingTop: 12,
    },
    textoTitulo:{
        color:'#2ECCFA',
        fontSize: 18,
    },
    textoHorario: {
        color:'#A4A4A4',
        fontSize: 15,
    }
})