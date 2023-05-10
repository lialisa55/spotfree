import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Inicio() {
  return (
    <View>
      <Image
        style={styles.img}
        resizeMode={'contain'}
        source={require('../../assets/spotfree.gif')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    height: 740,
    width: 800,
  },
});