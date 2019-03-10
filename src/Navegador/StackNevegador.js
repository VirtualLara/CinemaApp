import {createStackNavigator, createAppContainer} from 'react-navigation';
import Principal from '../Vistas/Principal';
import DetallePelicula from '../Vistas/DetallePelicula';

const navegador = createStackNavigator({
    principal: {screen: Principal},
    Detalles: {screen: DetallePelicula},
},
{
    headerMode: 'none',
}
)

export default createAppContainer(navegador);
