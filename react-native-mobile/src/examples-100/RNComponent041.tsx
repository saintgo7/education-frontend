import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RNComponent41() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Example 41</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
});
