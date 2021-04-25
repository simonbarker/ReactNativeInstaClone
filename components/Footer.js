import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Footer = props => {
  const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    bg: {
      backgroundColor: Colors.darker,
    },
    whiteText: {
      color: 'white',
    },
    flexContainerHori: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 15,
      justifyContent: 'space-between',
      marginHorizontal: 10,
      height: 70,
      bottom: 0,
    },
    buttonContainer: {
      justifyContent: 'center',
      padding: 10,
    },
    button: {
      alignSelf: 'center',
      width: 20,
      height: 20,
      marginTop: -50,
    },
    selected: {
      borderColor: 'white',
      borderBottomWidth: 1,
    },
  });

  return (
    <View style={styles.flexContainerHori}>
      <View style={{...styles.buttonContainer}}>
        <Image
          style={styles.button}
          source={require('../images/homeIcon.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('../images/searchIcon.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('../images/reelsIconLight.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('../images/shoppingIcon.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('../images/avatarSmall.png')}
        />
      </View>
    </View>
  );
};

export default Footer;
