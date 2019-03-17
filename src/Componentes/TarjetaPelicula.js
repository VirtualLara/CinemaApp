import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class TarjetaPelicula extends Component {
    constructor(props){
        super(props)


    }

    render(){
        return(
            <View style={estilos.contenedor}>
                <View style={estilos.imagenSeccion}>
                    <Image style={estilos.imagenPelicula} source={{uri: 'https://cinemapp.000webhostapp.com/images/'+this.props.imagen}}/>
                </View>
                <View style={estilos.datosSeccion}>
                    <View style={estilos.datosTitulo}>
                        <Text style={estilos.textoTitulo}> {this.props.nombre} </Text>
                    </View>
                    <View style={estilos.datosInfo}>
                        <MaterialIcons name='local-movies' color='#2ECCFA' size={18} />
                        <Text style={estilos.textoInfo}> {this.props.duracion} </Text>
                        <Text style={estilos.textoInfo}>     {this.props.clasifi} </Text>
                    </View>
                    <View style={estilos.datosHoras}>
                        <MaterialIcons name='movie' color='#2ECCFA' size={18} />
                        <Text style={estilos.textoInfo}> {this.props.genero}  </Text>
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
        flexDirection: 'row',
    },
    textoInfo:{
        fontSize: 13,
        color:'gray',
    },
    textoTitulo:{
        fontSize:18,
        fontWeight: 'bold',
    },
    imagenPelicula:{
        width: 80,
        height: 120,
    },
})