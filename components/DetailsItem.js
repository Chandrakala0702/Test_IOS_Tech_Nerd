import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailsItem = props => {
  const value = props.value;
  return (
    <View style={styles.details}>
      <Text style={styles.title}>{props.label}</Text>
      {props.id === 'address' && (
        <View style={styles.item}>
          <Text>{value.street},</Text>
          <Text>{value.suite},</Text>
          <Text>{value.city},</Text>
          <Text>{value.zipcode},</Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Lat: </Text>
            {value.geo.lat}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Lng: </Text>
            {value.geo.lng}
          </Text>
        </View>
      )}
      {props.id === 'company' && (
        <View style={styles.company}>
          <Text style={styles.companyTitle}>{value.name}</Text>
          <Text style={styles.companyPhrase}>{value.catchPhrase}</Text>
          <Text style={styles.overview}>About:</Text>
          <Text style={styles.description}>{value.bs}</Text>
        </View>
      )}

      {!props.id && <Text style={styles.item}>{value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  item: {
    borderRadius: 2,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: '50%',
  },
  title: {
    fontWeight: 'bold',
  },
  company: {
    width: '50%',
    paddingTop: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  companyTitle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  companyPhrase: {
    fontSize: 10,
    color: 'black',
  },
  overview: {
    fontSize: 11,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  description: {
    paddingTop: 2,
    fontSize: 12,
  },
});
export default DetailsItem;
