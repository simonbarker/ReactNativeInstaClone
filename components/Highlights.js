import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Highlights = props => {
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
    highlightImage: {
      borderRadius: 50,
      height: 50,
      width: 50,
      marginTop: 2,
      marginLeft: 2,
    },
    addHighlightImage: {
      borderRadius: 50,
      height: 20,
      width: 20,
      marginTop: 16.5,
      marginLeft: 16.5,
    },
    imageContainer: {
      borderWidth: 0.75,
      borderColor: '#777',
      borderStyle: 'solid',
      height: 55.5,
      width: 55.5,
      borderRadius: 50,
    },
    highlightName: {
      marginTop: 4,
      color: 'white',
      fontSize: 7.7,
      textAlign: 'center',
    },
    highlightContainer: {
      width: 70,
      paddingRight: 15,
    },
  });

  return (
    <View style={styles.flexContainerHori}>
      <View style={styles.highlightContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.highlightImage}
            source={require('../images/highlight1.png')}
          />
        </View>
        <Text numberOfLines={1} style={styles.highlightName}>
          100DaysOfSwiftUI
        </Text>
      </View>
      <View style={styles.highlightContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.highlightImage}
            source={require('../images/highlight2.png')}
          />
        </View>
        <Text numberOfLines={1} style={styles.highlightName}>
          Office Rennovation
        </Text>
      </View>
      <View style={styles.highlightContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.addHighlightImage}
            source={require('../images/addHighlight.png')}
          />
        </View>
        <Text numberOfLines={1} style={styles.highlightName}>
          New
        </Text>
      </View>
    </View>
  );
};

export default Highlights;
