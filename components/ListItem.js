import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.itemContainer}
      onPress={props.onPress}>
      <View style={styles.actions}>
        <Text style={styles.user}>{props.name}</Text>
        <Image
          source={require('../images/chevron-right.png')}
          style={{width: 23, height: 23}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#afafaf',
    elevation: 3,
    shadowColor: '#afafaf',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    padding: 20,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  user: {
    fontWeight: 'bold',
  },
});

export default ListItem;
