import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FeedButtons = props => {
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
    },
    buttonContainer: {
      width: '33%',
      justifyContent: 'center',
      padding: 10,
    },
    button: {
      alignSelf: 'center',
      width: 20,
      height: 20,
      margin: 'auto',
    },
    selected: {
      borderColor: 'white',
      borderBottomWidth: 1,
    },
  });

  return (
    <View style={styles.flexContainerHori}>
      <View style={{...styles.buttonContainer, ...styles.selected}}>
        <Image
          style={styles.button}
          source={require('../images/feedIcon.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('../images/reelsIconDark.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Image
          style={styles.button}
          source={require('../images/taggedIcon.png')}
        />
      </View>
    </View>
  );
};

export default FeedButtons;
