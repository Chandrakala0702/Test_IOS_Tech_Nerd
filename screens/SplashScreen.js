import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
//white_orange.png
const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('UserOverview');
    }, 30000);
  });
  return (
    <View style={styles.splash}>
      <Image
        source={require('../images/tech_nerd_logo.png')}
        style={{resizeMode: 'contain', width: '50%', height: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
