import React, {Component} from 'react';
import {View} from 'react-native'
import {Footer, FooterTab, Button, Text} from 'native-base'


export default class Tab extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button active={this.props.navegador.navigation.state.index===0}
                    onPress={()=>{this.props.navegador.navigation.navigate('horarios')}}>
                        <Text> Horarios </Text>
                    </Button>
                    <Button active={this.props.navegador.navigation.state.index===1}
                    onPress={()=>{this.props.navegador.navigation.navigate('sinopsis')}}>
                        <Text> Sinopsis </Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}