import React from 'react';
import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';

import Inicio from './pages-navbar/inicio';
import Buscar from './pages-navbar/buscar';
import Biblioteca from './pages-navbar/biblioteca';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Incio"
        component={Inicio}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Biblioteca"
        component={Biblioteca}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-music" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
