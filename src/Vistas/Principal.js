import React, {Component} from 'react';
import {View, StyleSheet, StatusBar, Platform, ScrollView, } from 'react-native';
import {Header, Text, Left, Right, Body, H2 } from 'native-base';
import Carrousel from '../Componentes/CarruselImagenes';
import Listado from '../Componentes/Listado';


export default class Principal extends Component {

    render(){
        return(
            <View style={[estilos.contenedor, estilos.statusBar]}>
                <Header>
                    <Left/>
                    <Body>
                        {/* <Text style={estilos.texto}> Cartelera </Text> */}
                        <H2 style={estilos.texto}> Cartelera </H2>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView style={{flex:10}}>
                    {/* <View style = {estilos.cuerpoApp}> */}
                        <Carrousel/>
                        <Listado/>
                        {/* </View> */}
                </ScrollView>
            </View>
        );
    }
        
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:8,
    },
    statusBar:{
        ...Platform.select({
            android:{
                marginTop: StatusBar.currentHeight,
            }
        })
    },
    texto:{
        color: 'white',
    },
    cuerpoApp:{
        flex: 9,
    },
})