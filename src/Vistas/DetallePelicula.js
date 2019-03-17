import React, {Component} from 'react';
import {View, StyleSheet,Text, AsyncStorage, StatusBar, Platform, TouchableHighlight, Image } from 'react-native';
import Trailer from '../Componentes/Trailer';
import TabNavigator from '../Navegador/TabNavigator';
import Carga from '../Componentes/Carga';
import Sinopsis from '../Componentes/Sinopsis'


export default class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.obtenerDetallesPelicula=this.obtenerDetallesPelicula.bind(this);

        this.state={
            peliculaDetalles:null,
            estadoPelicula: false,
            pelicula:{
                trailer: null,
                horario:[],
                duracion: null,
                clasificacion: null,
                director: null,
                sinopsis: null,
            }
        }
    }

    componentDidMount(){
        let pelicula=this.props.navigation.getParam('idPelicula');
        let cine=this.props.navigation.getParam('idCine');
        this.obtenerDetallesPelicula(pelicula, cine)
    }

    obtenerDetallesPelicula(id_pelicula, id_cine){
        fetch('https://cinemapp.000webhostapp.com/api/obtenerDetallesPelicula.php?id_cine='+id_cine + '&id_pelicula='+id_pelicula).then(response=>response.json()).then(res=>{
            let _horario=[];
            res.datos.map(Item=>{
                _horario.push(Item.horario);
                this.setState({
                    pelicula: {
                        trailer:Item.trailer,
                        horario:_horario,
                        duracion: Item.duracion,
                        clasificacion: Item.clasificacion,
                        director: Item.director,
                        sinopsis: Item.sinopsis,
                    }
                })
            })
            this.setState({estadoPelicula: true})
        }).catch(error=>{
            console.warn(error)
        })
    }

    render(){
        if(!this.state.estadoPelicula){
            return <Carga/>
        }
        return(
            <View style={[estilos.statusBar, estilos.contenedor]}>
                {/* <ScrollView> */}
                    <Trailer trailer={this.state.pelicula.trailer}/>
                    <Sinopsis pelicula={this.state.pelicula}/>
                    {/* <TabNavigator pelicula={{dato:'hola'}} /> */}
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