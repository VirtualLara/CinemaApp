import React, {Component} from 'react';
import {View, StyleSheet,Text, ScrollView, StatusBar, Platform, TouchableHighlight, Image } from 'react-native';
import Trailer from '../Componentes/Trailer';
import TabNavigator from '../Navegador/TabNavigator';


export default class DetallePelicula extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View style={[estilos.statusBar, estilos.contenedor]}>
                {/* <ScrollView> */}
                    <Trailer/>
                    <TabNavigator/>
                {/* </ScrollView> */}
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:6,
    },
    header:{
        flex:4,
        backgroundColor: 'red',
    },
    statusBar:{
        ...Platform.select({
            android:{
                marginTop: StatusBar.currentHeight,
            }
        })
    },
    prueba:{
        flex:5,
        paddingVertical: 50,
    },
})