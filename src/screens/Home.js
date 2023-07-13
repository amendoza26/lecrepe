import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import firestore from '@react-native-firebase/firestore';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
