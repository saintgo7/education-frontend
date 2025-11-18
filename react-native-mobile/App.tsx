import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>React Native Mobile</Text>
      <Text>Check src/examples-100 for 100+ React Native examples</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default App;
