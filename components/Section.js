import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section = props => {
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
  });

  return (
    <View>
      <Text style={styles.whiteText}>Here4</Text>
    </View>
  );
};

export default Section;
