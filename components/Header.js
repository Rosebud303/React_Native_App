import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContent}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    width: 'auto',
  },

  text: {
    fontSize: 40,
    backgroundColor: 'blue',
    padding: 10,
  },
})
