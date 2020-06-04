import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export const ListCard = ({name, id, removeListItem}) => {
  return (
    <TouchableOpacity>
      <View style={styles.listCardContainer} key={id}>
        <View>
          <Text style={styles.listCardTitle}>{name}</Text>
        </View>
        <Icon name='remove' size={30} color="firebrick" onPress={() => removeListItem(id)}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCardContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderWidth: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  listCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
