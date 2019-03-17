import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Sinopsis extends Component{
constructor(props){
    super(props)
}
    render(){
        return(
            <View style={estilos.contenedor}>
                <ScrollView>
                    <View style={estilos.seccionDuracion}>
                        <Ionicons name='ios-stopwatch' color='#2ECCFA' size={20}/>
                        <Text> {this.props.pelicula.duracion}         </Text>
                        <MaterialIcons name='local-movies' color='#2ECCFA' size={20}/>
                        <Text> {this.props.pelicula.genero} </Text>
                    </View>
                    <View style={estilos.seccioninfo}>
                        <View style={estilos.seccionInfoDatos}>
                            <Text style={estilos.titulosInfo}> Titulo: </Text>
                            <Text>   </Text>
                        </View>
                        <View style={estilos.seccionInfoDatos}>
                            <Text style={estilos.titulosInfo}> Director: </Text>
                            <Text> {this.props.pelicula.director}  </Text>
                        </View>
                    </View>
                    <View style={estilos.seccionsinopsis}>
                        <Text style={estilos.titulosInfo}> Sinopsis: </Text>
                        <Text style={{justifyContent:'center'}}> {this.props.pelicula.sinopsis}  </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const estilos=StyleSheet.create({
    contenedor:{
        flex:4,
    },
    seccionDuracion:{
        flex:1,
        flexDirection: 'row',
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    seccioninfo:{
        flex:2,
    },
    seccionsinopsis:{
        flex:4,
        marginHorizontal: 15,
    },
    seccionInfoDatos:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingTop: 15,
    },
    titulosInfo:{
        color: '#58D3F7',
        fontSize: 16,
    },
})