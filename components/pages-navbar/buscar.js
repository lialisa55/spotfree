import * as React from 'react';
<<<<<<< HEAD
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Buscar(props) {
=======
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Inicio() {
>>>>>>> a33d65b8bad5e903a9a8718642bda34bcba184e5
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.box}>
<<<<<<< HEAD
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            props.navigation.navigate('Pop');
          }}>
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={require('../../assets/pop.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            props.navigation.navigate('Rock');
          }}>
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={require('../../assets/rock.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            props.navigation.navigate('HipHop');
          }}>
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={require('../../assets/hiphop.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.items}
          onPress={() => {
            props.navigation.navigate('Ambiental');
          }}>
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={require('../../assets/ambiental.png')}
          />
        </TouchableOpacity>
=======
      <TouchableOpacity style={styles.items}>
        <Image style={styles.img} /> 
      </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
        <Image style={styles.img}/>
      </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
        <Image style={styles.img}/>
      </TouchableOpacity>
            <TouchableOpacity style={styles.items}>
        <Image style={styles.img}/>
      </TouchableOpacity>
>>>>>>> a33d65b8bad5e903a9a8718642bda34bcba184e5
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
<<<<<<< HEAD
    backgroundColor: '#AAAAAA',
  },
  input: {
    backgroundColor: '#FAFAFA',
    margin: 10,
    borderRadius: 10,
    fontSize: 40,
    width: 320,
    height: 55,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
=======
    backgroundColor: '#222222',
  },
  input: {
    backgroundColor: '#FFFAFA',
    margin: 10,
    borderRadius: 10,
    fontSize: 40,
    width: 300,
    height: 55
  },
    box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
>>>>>>> a33d65b8bad5e903a9a8718642bda34bcba184e5
    padding: 10,
    justifyContent: 'center',
  },
  items: {
    alignItems: 'center',
    margin: 10,
<<<<<<< HEAD
    padding: 8,
    width: 150,
    height: 150,
  },
  img: {
    alignSelf: 'center',
    width: 150,
    height: 150,
=======
    borderRadius: 10,
    padding: 8,
    borderWidth: 5,
    width: 100,
>>>>>>> a33d65b8bad5e903a9a8718642bda34bcba184e5
  },
});
