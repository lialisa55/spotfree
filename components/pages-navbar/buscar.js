import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.box}>
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
    padding: 10,
    justifyContent: 'center',
  },
  items: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 8,
    borderWidth: 5,
    width: 100,
  },
});
