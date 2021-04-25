import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const Header = props => {
  const styles = StyleSheet.create({
    bannerText: {
      fontWeight: '700',
      color: '#009cff',
      textAlign: 'center',
      paddingVertical: 12,
      fontSize: 11,
    },
    border: {
      marginVertical: 10,
      borderTopWidth: 0.25,
      borderBottomWidth: 0.25,
      borderStyle: 'solid',
      borderTopColor: '#666666',
      borderBottomColor: '#666666',
    },
  });

  const onPressFunction = () => {
    console.log('pressed');
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexContainer}>
        <Pressable style={styles.border} onPress={onPressFunction}>
          <Text style={styles.bannerText}>{props.bannerText}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
