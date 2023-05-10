import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Pop from '../pages-buscar/pop';
import Rock from '../pages-buscar/rock';
import HipHop from '../pages-buscar/hiphop';
import Ambiental from '../pages-buscar/ambiente';
import Buscar from './buscar';

const Stack = createStackNavigator();

export default function RotasBuscar(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="Pop" component={Pop} />
        <Stack.Screen name="Rock" component={Rock} />
        <Stack.Screen name="HipHop" component={HipHop} />
        <Stack.Screen name="Ambiental" component={Ambiental} />
      </Stack.Navigator>
  );
}