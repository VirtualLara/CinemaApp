import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Slideshow from 'react-native-image-slider-show';

export default class CarruselImagenes extends Component {
    constructor(props){
        super(props)
        this.carrouselIntevalo=this.carrouselIntevalo.bind(this);

        this.state={
            imagenes:[
                {
                    url:'https://i2.sdpnoticias.com/sdpnoticias/2018/12/13/1342_dragon-ball-super-broly_620x350.jpg',
                },
                {
                    url:'https://www.elmulticine.com/imagenes/noticias/15/capi-america-3pic34dss.jpg',
                },
                {
                    url:'http://placeimg.com/640/480/any',
                },
            ],

            posicionActual:0,
        }
    }

    componentDidMount(){ 
        //setTimeout(()=>{ //esta funcion retrasa la ejecucion.
            this.carrouselIntevalo()
        //}, 2000)
    }

    carrouselIntevalo (){
        setInterval(() => {
            this.setState({
                posicionActual: this.state.posicionActual === this.state.imagenes.length ? 0 : this.state.posicionActual+1 
            })
        }, 5000);
    }

    render(){
        return(
            <View style={estilos.contenedor}>
                <Slideshow dataSource={this.state.imagenes} ovelay={true} 
                    position={this.state.posicionActual} onPositionChanged={position => this.setState({ posicionActual:position})}
                />
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    contenedor:{
        flex: 3.5,
    },
})