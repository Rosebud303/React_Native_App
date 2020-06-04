import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContent}>
      <Text style={styles.text}>List Buddy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    backgroundColor: 'darkslateblue',
    height: 80,
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    padding: 10,
    color: 'white',
  },
});
