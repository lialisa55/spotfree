import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Buscar(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={styles.box}>
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
    padding: 10,
    justifyContent: 'center',
  },
  items: {
    alignItems: 'center',
    margin: 10,
    padding: 8,
    width: 150,
    height: 150,
  },
  img: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
});
