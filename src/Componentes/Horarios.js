import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, AsyncStorage} from'react-native';
import HorarioCard from './HorarioCard'

export default class Horarios extends Component{
    constructor(props){
        super(props)
    }

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