import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {Header} from './components/Header';
import {ListForm} from './components/ListForm';
import {ListCard} from './components/ListCard';

const App = () => {
  const [listItems, setListItems] = useState([
    {id: 1, name: 'Fun'},
    {id: 2, name: 'Cool'},
    {id: 3, name: 'Silly'},
  ]);

  const addListItem = name => {
    setListItems(prevListItems => {
      return [{id: Date.now(), name }, ...prevListItems]
    })
  };

  const removeListItem = id => {
    setListItems(prevListItems => {
      return prevListItems.filter(listItem => listItem.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ListForm addListItem={addListItem} />
      <FlatList
        style={styles.list}
        data={listItems}
        renderItem={({item}) => {
          return <ListCard {...item} removeListItem={removeListItem}/>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  list: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: 'lightgray'
  }
});

export default App;
