import React from 'react';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Feed = props => {
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
    feedContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    imageContainer: {
      width: '33%',
    },
    image: {width: '100%', height: undefined, aspectRatio: 1},
  });

  return (
    <View style={styles.feedContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p1.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p2.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p3.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p4.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p5.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p6.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p4.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p5.png')} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/p6.png')} />
      </View>
    </View>
  );
};

export default Feed;
