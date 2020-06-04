import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Header } from './components/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
});

export default App;
