import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RNComponent63() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Example 63</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
});
