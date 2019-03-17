import React, {Component} from 'react';
import {View, Alert, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Picker, Form, } from 'native-base';
import PeliculaTarjeta from './TarjetaPelicula';
import PantallaCarga from './Carga';

export default class Listado extends Component {

    constructor(props){
        super(props)
        this.valorSeleccionado=this.valorSeleccionado.bind(this);
        this.obtenerCines=this.obtenerCines.bind(this);
        this.obtenerPeliculas=this.obtenerPeliculas.bind(this);
        this.navegar=this.navegar.bind(this);
        this.state={
            piketValor: 1,
            cines: null,
            peliculas: null,
            estadoCines: false,
            estadoPeliculas: false,
        }
    }

    componentDidMount(){
        this.obtenerCines();
        this.obtenerPeliculas(this.state.piketValor);
    }

    obtenerCines(){
        fetch('https://cinemapp.000webhostapp.com/api/obtenerCines.php').then(response=>response.json()).then(res=>{
            this.setState({cines:res, estadoCines:true})
        }).catch(error=>{
            Alert.alert('Error de peticion al servidor.')
        })
    }

    obtenerPeliculas(id_cine){
        this.setState({estadoPeliculas: false})

        fetch('https://cinemapp.000webhostapp.com/api/obtenerPeliculas.php?id_cine='+id_cine).then(response=>response.json()).then(res=>{
            this.setState({peliculas: res, estadoPeliculas: true})
        }).catch(error=>{
            Alert.alert('Error de peticion al servidor.')
        })
    }

    valorSeleccionado (nuevoValor){
        let _nuevoValor= parseInt(nuevoValor,10)
        this.setState({
            piketValor: _nuevoValor,
        })
        this.obtenerPeliculas(_nuevoValor);
    }

    renderizarElementosdeLista(){
        // return this.state.elementosLista.map((Item, key)=>{
        //     return <Picker.Item key={key} label={Item.label} value={Item.value}/>
        // })
        return this.state.cines.datos.map(nombreCine=>{
            return <Picker.Item key={nombreCine.id_cine} 
                        label={nombreCine.nombre_cine} 
                        value={nombreCine.id_cine}/>
        })
    }

    renderizarTarjetasLista (){
        return this.state.peliculas.datos.map( (Item) => {
            return (
                <TouchableHighlight key={Item.id_pelicula} onPress={()=>{this.navegar(Item.id_pelicula, this.state.piketValor )}}>
                    <PeliculaTarjeta key={Item.id_pelicula} 
                                    nombre={Item.nombre} 
                                    duracion={Item.duracion} 
                                    genero={Item.genero}
                                    clasifi={Item.clasificacion} 
                                    imagen={Item.Imagen}/>
                </TouchableHighlight>
            )
        } )
    }
    

    navegar(id_pelicula, id_cine){
        this.props.navegador.navigate('Detalles', { idCine: id_cine, idPelicula: id_pelicula}); {/* Aquí recibimos el prop del navegador */}
    }

    mostrarPicket(){
        return(
            <Picker mode='dropdown' placeholder='Seleccione un cine...' selectedValue={this.state.piketValor} onValueChange={ value =>{this.valorSeleccionado(value)}}>
                {this.renderizarElementosdeLista()}
            </Picker>
        )
    }


    render(){
        return(
            <View style ={estilos.contenedor}>
                <View style = {estilos.piket}>
                    <Form>
                        {this.state.estadoCines && this.mostrarPicket()}
                    </Form>
                </View>
                <View style={estilos.listadoPeliculas}>
                    {!this.state.estadoPeliculas && <PantallaCarga/> }
                    {this.state.estadoPeliculas && this.renderizarTarjetasLista() }
                    {/* <PantallaCarga/> */}
                    {/* {this.renderizarTarjetasLista()}     */}
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:6,
    },
    piket:{
        flex:1,
    },
    listadoPeliculas:{
        flex:5,
    },
})