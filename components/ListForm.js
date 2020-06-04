import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export const ListForm = ({addListItem}) => {
  const [item, setItem] = useState('')
  
  const handleChange = (name) => setItem(name)

    return (
      <View>
        <TextInput
          style={styles.input}
          type="text"
          onChangeText={handleChange}
          placeholder="Name Here..."
          name="title"
        />
        <TouchableOpacity style={styles.btn} onPress={() => addListItem(item)}>
          <Text style={styles.addBtnText}>
            <Icon name="plus" size={25} color='green'/> Add List Item
          </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 30,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'lightgray',
    marginTop: 10,
    padding: 10,
  },

  addBtnText: {
    fontSize: 25,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2bad8',
    margin: 10,
    padding: 10,
  }
});
