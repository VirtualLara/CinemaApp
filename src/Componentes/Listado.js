import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Picker, Form, } from 'native-base';
import PeliculaTarjeta from './TarjetaPelicula';

export default class Listado extends Component {
    constructor(props){
        super(props)
        this.valorSeleccionado=this.valorSeleccionado.bind(this);
        this.navegar=this.navegar.bind(this);
        this.state={
            piketValor: undefined,
            elementosLista:[
                {
                    value: 1,
                    label: 'Cine uno',
                },
                {
                    value: 2,
                    label: 'Cine dos',
                },
                {
                    value: 3,
                    label: 'Cine tres',
                },
                {
                    value: 4,
                    label: 'Cine cuatro',
                },
            ],
            listaPeliculas:[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
            ]
        }
    }

    valorSeleccionado (nuevoValor){
        this.setState({
            piketValor: nuevoValor,
        })
    }

    renderizarElementosdeLista(){
        return this.state.elementosLista.map((Item, key)=>{
            return <Picker.Item key={key} label={Item.label} value={Item.value}/>
        })
    }

    renderizarTarjetasLista (){
        return this.state.listaPeliculas.map( (Item, Index) => {
            return (
                <TouchableHighlight key={Index} onPress={()=>{this.navegar()}}>
                    <PeliculaTarjeta key={Index}/>
                </TouchableHighlight>
            )
        } )
    }

    navegar(){
        this.props.navegador.navigate('Detalles'); {/* Aquí recibimos el prop del navegador */}
    }

    render(){
        return(
            <View style ={estilos.contenedor}>
                <View style = {estilos.piket}>
                    <Form>
                        <Picker mode='dropdown' placeholder='Seleccione un cine...' selectedValue={this.state.piketValor} onValueChange={ value =>{this.valorSeleccionado(value)}}>
                            {this.renderizarElementosdeLista()}
                        </Picker>
                    </Form>
                </View>
                <View style={estilos.listadoPeliculas}>
                    {this.renderizarTarjetasLista()}    
                </View>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex:6,
        backgroundColor: 'silver',
    },
    piket:{
        flex:1,
    },
    listadoPeliculas:{
        flex:5,
    },
})