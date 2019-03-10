import React, {Component} from 'react'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Footer, FooterTab, Button, Text} from 'native-base';
import Horarios from '../Componentes/Horarios';
import Sinopsis from '../Componentes/Sinopsis';
import Tab from '../Componentes/Tab'

const tab = createBottomTabNavigator({
    horarios:{
        screen: Horarios
    },
    sinopsis:{
        screen: Sinopsis
    }
},
    {
        tabBarComponent: props => <Tab navegador={props}/>
    }
    
   )

export default createAppContainer(tab)