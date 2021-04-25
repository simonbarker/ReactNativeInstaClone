import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const FeedButton = props => {
  console.log(props.image);
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
    },
    button: {
      alignSelf: 'center',
      width: 20,
      height: 20,
      margin: 'auto',
    },
  });

  return (
    <View style={styles.buttonContainer}>
      {/* <Image style={styles.button} source={require(`${props.image}`)} /> */}
    </View>
  );
};

export default FeedButton;
