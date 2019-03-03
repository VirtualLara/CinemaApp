import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker, Form, } from 'native-base';
import PeliculaTarjeta from './TarjetaPelicula';

export default class Listado extends Component {
    constructor(props){
        super(props)
        this.valorSeleccionado=this.valorSeleccionado.bind(this);
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
                    <PeliculaTarjeta/>
                    <PeliculaTarjeta/>
                    <PeliculaTarjeta/>
                    <PeliculaTarjeta/>
                    <PeliculaTarjeta/>
                    <PeliculaTarjeta/>
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