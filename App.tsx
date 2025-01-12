import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <FlatCards style={styles.text}></FlatCards>
      <ElevatedCards></ElevatedCards>
      <FancyCards></FancyCards>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});