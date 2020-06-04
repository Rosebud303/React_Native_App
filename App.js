

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 3,
    justifyContent: "center",
    alignItems: 'center',
  },

  text: {
    fontSize: 40,
  }
});

export default App;
