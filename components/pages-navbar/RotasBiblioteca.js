import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Musicas from '../pages-biblioteca/musicas';
import Podcasts from '../pages-biblioteca/podcast';
import Artistas from '../pages-biblioteca/artistas';
import Biblioteca from './biblioteca';

const Stack = createStackNavigator();

export default function RotasBiblioteca() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Biblioteca" component={Biblioteca} />
        <Stack.Screen name="Musicas" component={Musicas} />
        <Stack.Screen name="Podcasts" component={Podcasts} />
        <Stack.Screen name="Artistas" component={Artistas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}