import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from'react-native';
import HorarioCard from './HorarioCard'

export default class Horarios extends Component{

    render(){
        return(
            <View style={estilos.contenedor}>
                <ScrollView>
                    <HorarioCard/>
                </ScrollView>
            </View>
        )
    }
}

const estilos=StyleSheet.create({
    contenedor:{
        flex:6,
    }
})