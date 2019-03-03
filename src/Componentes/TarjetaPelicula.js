import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, } from 'react-native';

export default class TarjetaPelicula extends Component {

    render(){
        return(
            <View style={estilos.contenedor}>
                <View style={estilos.imagenSeccion}>
                    <Image style={estilos.imagenPelicula} source={{uri:'https://m.media-amazon.com/images/M/MV5BMjlhY2Y5NGYtZDdlMS00YzhhLWJhNzQtNWYzNTQzZDJjNGU2XkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_UX182_CR0,0,182,268_AL_.jpg'}}/>
                </View>
                <View style={estilos.datosSeccion}>
                    <View style={estilos.datosTitulo}>
                        <Text style={estilos.textoTitulo}> Jurassic Park </Text>
                    </View>
                    <View style={estilos.datosInfo}>
                        <Text style={estilos.textoInfo}> xx  xx x x </Text>
                    </View>
                    <View style={estilos.datosHoras}>
                        <Text style={estilos.textoInfo}> xx  xx x x </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    imagenSeccion:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    datosSeccion:{
        flex:3,
    },
    datosTitulo:{
        flex:1
    },
    datosInfo:{
        flex:.5,
        flexDirection: 'row',
    },
    datosHoras:{
        flex:2,
    },
    textoInfo:{
        fontSize: 13,
        color:'gray',
    },
    textoTitulo:{
        fontSize:20,
        fontWeight: 'bold',
    },
    imagenPelicula:{
        width: 80,
        height: 120,
    },
})